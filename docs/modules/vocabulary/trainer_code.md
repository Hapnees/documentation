---
title: Тренажёр (код)
sidebar_position: 3
---

## Точка входа

Точкой входа в тренажёр является файл `Training.tsx`

## startTraining

Обратим внимание на функцию **startTraining**.
Засчёт неё происходит загрузка данных и старт тренажёра

```ts
function startTraining() {
  if (childId) {
    setStart(false)
    clearTraining()
    trainingStart({
      grade,
      isAuthDef: isAuth,
      childId,
      route: (link: string) => router.push(link),
      setTrainingWords,
      trainingActions: trainingActions,
      dispatch,
    }).then(status => {
      if (status === 'ready') {
        setStart(true)
      } else if (status === 'error') {
        isError()
      }
    })

    router.replace(`/training/${grade}`)
  } else {
    setStart(true)
  }
}
```

## trainingStart

В ней используется функция **trainingStart**.
Она завершает все тренировки и начинает новую

```ts
export const trainingStart = async ({...}: ITrainingStartProps) => {
  try {
    const isAuth = isAuthDef && childId != -1;
    dispatch(trainingActions.clear());

    if (isAuth) {
      fetchFinishAllLesson({ childId }).catch((e) => e);
      const { id } = await fetchStartLesson(grade, {
        childId: Number(childId),
      });
      dispatch(
        trainingActions.startLesson({
          childId: childId,
          lessonId: id,
        }),
      );
    }
    ...
```

В процессе прохождения тренажёра все данные записываются в **redux-persist**

Тренажёр стартует, а мы перемещаемся в следующий файл `TrainerPage.tsx`.
В нём и написана логика тренажёра

## getLetters

Первым делом обратим внимание на функцию **getLetters**. Она занимается парсингом слова

Может случиться так, что на одну букву поставят два пропуска. Для устранения таких ситуаций в начале применяем функцию **removeDublicate**
Затем сортируем пропуски по **positionNumberFromZero** в порядке возрастания

**positionNumberFromZero** - позиция пропуска в слове (вернее, позиция, с которой этот пропуск начинается)

```ts
export const getLetters = (
  fullword: string,
  wordParts: IWordPart[],
): IParsedWord => {
  const uniqueWordParts = [...removeDublicate(wordParts)];
  uniqueWordParts.sort(
    (a, b) => a.positionNumberFromZero - b.positionNumberFromZero,
  );

  const word: IParsedWord = fullword.split('');

  const result: IParsedWord = [];

  let index = 0;

  while (index < word.length) {
  ...
}
```

В **result** будем записывать результат парсинга

```ts
{
...

  while (index < word.length) {
    const cWordPart = uniqueWordParts.find(
      (_wordPart) => _wordPart.positionNumberFromZero === index,
    );

    let cWpIndex = 0;

    uniqueWordParts.forEach((wp, _wpIndex) => {
      if (wp?.positionNumberFromZero === cWordPart?.positionNumberFromZero) {
        cWpIndex = _wpIndex;
        return;
      }
    });

    const pWordPart =
      cWpIndex === 0 ? undefined : uniqueWordParts[cWpIndex - 1];

    const nWordPart = uniqueWordParts.find(
      (_wordPart) => _wordPart.positionNumberFromZero > index,
    );

    if (!cWordPart) {
      result.push(word[index]);
      index++;
      continue;
    }

    ...
  }
  ...
}
```

Для начала получим пропуск по текущему индексу.
Затем определим индекс пропуска в массиве пропусков и запишем этот индекс в **cWpIndex**

Не использовал **Array.prototype.indexOf**, поскольку в таком случае можем наткнуться не тот пропуск.
В **pWordPart** и **nWordPart** запишем предыдущий и следующий пропуски соответственно

В случае, если мы не нашли пропуск, пушим в **result** обычный символ. В результате у нас получится массив по типу
`['в', {...}, 'р', {...}, 'о', 'б', 'е', 'й']`. В объектах будут пропуски, а в остальных случаях - символы слова

Далее определяем тип пропуска (тип ошибки), позицию пропуска в слове, длину пропуска, правильный ответ и величину **plusIndex**, на которую увеличим главный **index**. Далее эта величина может меняться при условиях

Порой с бэка могут прийти одинаковы варианты, например: `['с', 'рр', 'рр']`. Убираем повторяющеся варианты с помощью **Set(...)**

```ts
if (!cWordPart) {
  result.push(word[index])
  index++
  continue
}

const wordPartError = detectWordPartError(cWordPart.variants)
const pos = cWordPart.positionNumberFromZero
const length = cWordPart.wordPartLength
const correctLetters = fullword.slice(pos, pos + length)
let plusIndex = length

const cWordPartVarsWithoutRepeat = Array.from(new Set(cWordPart.variants));
...
```

Определяем тип пропуска (тип ошибки) с помощью функции [detectWordPartError](/docs/modules/vocabulary/trainer_functions#detectwordparterror)

Далее нам нужно отформатировать варианты с помощью функции [formatVariants](/docs/modules/vocabulary/trainer_functions#formatvariants)
