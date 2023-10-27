---
title: Функции
sidebar_position: 4
---

## detectWordPartError

Определяем тип пропуска (тип ошибки)

```ts
export const detectWordPartError = (variants: string[]): IWordPartError => {
  const isWhiteSpaceError = variants.some(_variant => _variant.includes('_'))

  if (isWhiteSpaceError) {
    return 'SAH'
  }

  const { result: variantsWithoutDuplicate } = removeDuplicateLetters(variants)

  const isDuplicateError = !isEqualArrays(variants, variantsWithoutDuplicate)

  if (isDuplicateError) {
    return 'DUPLICATE'
  }

  return 'SIMPLE'
}
```

Всего есть 3 типа ошибки: **SIMPLE**, **DUPLICATE**, **SAH**

1. SIMPLE - обычный пропуск. Варианты: `['а', 'о']`
2. DUPLICATE - пропуск, буквы в вариантах которого повторяются. Варианты: `['ться', 'тся']`
3. SAH - пропуск "слитно/раздельно/через дефис". Один из его вариантов обязательно будет содержать символ **'\_'**.
   Варианты `['з_п', 'з п']`

Для определения ошибки **DUPLICATE** используем функцию **removeDuplicateLetters**

### removeDuplicateLetters

Функция удаляет по одному повторяющемуся элементу из каждой строки массива.
Первым аргументом принимает массив строк (вариантов), вторым - параметр **isRemoveAll**. При установке второго параметра в значение **true** функция удаляет все повторяющиеся элементы из каждой строки

Возвращает `{ removedLeft, result, removedRight }`

1. result - массив строк (вариантов) без повторяющихся символов
2. removedLeft - символы, удалённые слева от центра строки
3. removedRight - символы, удалённые справа от центра строки

Индкс центра строки определяется по формуле `Math.round(str.length / 2)`

### isEqualArrays

Проверяет равенство двух массивов по равенству и кол-ву их элементов

```ts
export const isEqualArrays = <T>(arr1: T[], arr2: T[]) => {
  if (arr1.length !== arr2.length) return false

  const sortedArr1 = [...arr1].sort()
  const sortedArr2 = [...arr2].sort()

  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false
    }
  }

  return true
}
```

## formatVariants

Функция форматирует варианты с учётом типа ошибки.
На выходе мы получим варианты со следующими полями:

1. value - (возможно #DEPRECATED - пересмотреть)
2. valueCompareWithCorrect - для сравнения с корректным вариантом. Это значение, которое отправляется на бэкенд
3. display - значение, которое отображается под словом
4. displayRight - значение, которое отображается в слове после выбора варианта (если он верный)
5. displayWrong - значение, которое отображается в слове после выбора варианат (если он неверный)
6. displayKeyboard - значение, которое отображается на экранной клавиатуре

### SAH

В случае ошибки SAH, у нас всегда 3 варианта.
Под словом отображаем символы '**-?**'

Варианты на клавиатуре: **слитно**, **раздельно**, **-**

```ts
export const formatVariants = (
  variants: string[],
  wordPartError: IWordPartError,
  fullword: string,
  wordPart: IWordPart,
) => {
  if (wordPartError === 'SAH') {
    const pos = wordPart.positionNumberFromZero;
    const length = wordPart.wordPartLength;

    const leftLetter = fullword.slice(pos, pos + 1);
    const rightLetter = fullword.slice(pos + length - 1, pos + length);

    const seamlesslyValue = leftLetter + rightLetter;
    const apartValue = leftLetter + ' ' + rightLetter;
    const dashValue = leftLetter + '-' + rightLetter;

    const result: IVariant[] = [
    {
      value: dashValue,
      display: '',
      displayRight: '-',
      displayWrong: '-',
      displayKeyboard: '-',
      valueCompareWithCorrect: dashValue,
    },
    {
      value: seamlesslyValue,
      display: '',
      displayKeyboard: 'слитно',
      displayRight: '',
      displayWrong: '/',
      valueCompareWithCorrect: seamlesslyValue,
    },
    {
      value: apartValue,
      display: '-?',
      displayKeyboard: 'раздельно',
      displayRight: '_',
      displayWrong: '_',
      valueCompareWithCorrect: apartValue,
    },
  ];

    return result;
  }
  ...
}
```

### DUPLICATE

В случае ошибки DUPLICATE в value мы записываем варианты без повторяющихся символов

Если один из вариантов (без повт. символов) является пустой строкой, то в **display** остальных вариантов добавляем знак вопроса. Предполагается, что при такой ошибке всегда будет 2 варианта

```ts
if (wordPartError === 'DUPLICATE') {
  const { result: variantsWithoutDuplicates } = removeDuplicateLetters(variants)

  const result: IVariant[] = variants.map((_variant, _index) => {
    if (variantsWithoutDuplicates[_index] === '') {
      return {
        value: '',
        valueCompareWithCorrect: _variant,
        display: '',
        displayRight: '',
        displayWrong: '/',
        displayKeyboard: ' ',
      }
    }

    const displayVariant = variantsWithoutDuplicates.includes('')
      ? variantsWithoutDuplicates[_index] + '?'
      : variantsWithoutDuplicates[_index]

    return {
      value: variantsWithoutDuplicates[_index],
      valueCompareWithCorrect: _variant,
      display: displayVariant,
      displayRight: variantsWithoutDuplicates[_index],
      displayWrong: variantsWithoutDuplicates[_index],
      displayKeyboard: variantsWithoutDuplicates[_index],
    }
  })

  return result
}
```

### SIMPLE

В случае ошибки SIMPLE во все поля ставим вариант без изменений

```ts
return variants.map(_variant => ({
  value: _variant,
  valueCompareWithCorrect: _variant,
  display: _variant,
  displayRight: _variant,
  displayWrong: _variant,
  displayKeyboard: _variant,
}))
```
