import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { storyParts as publishedStoryParts } from './chapter'
import { firstDateStory } from './firstDate'
import { secondDateStory } from './secondDate'
import gromStoryText from './grom-v-nebe.txt?raw'
import ranenayaPartOneText from './ranenayaMiraAbbyPartOne.txt?raw'
import ranenayaMainPartOneText from './ranenayaMainPartOne.txt?raw'
import ranenayaMainPartTwoText from './ranenayaMainPartTwo.txt?raw'
import ranenayaMainPartThreeText from './ranenayaMainPartThree.txt?raw'
import ranenayaMainPartFourText from './ranenayaMainPartFour.txt?raw'
import ranenayaMainPartFiveText from './ranenayaMainPartFive.txt?raw'
import ranenayaMainPartSixText from './ranenayaMainPartSix.txt?raw'
import ranenayaMainPartSevenText from './ranenayaMainPartSeven.txt?raw'
import ranenayaMainPartEightText from './ranenayaMainPartEight.txt?raw'
import ranenayaMainPartNineText from './ranenayaMainPartNine.txt?raw'
import ranenayaMainPartTenText from './ranenayaMainPartTen.txt?raw'
import ranenayaBestFriendsText from './ranenayaBestFriends.txt?raw'
import mechIShramyPartOneText from './mechIShramyPartOne.txt?raw'
import mechIShramyPartTwoText from './mechIShramyPartTwo.txt?raw'
import mechIShramyPartThreeText from './mechIShramyPartThree.txt?raw'
import mechIShramyPartFourText from './mechIShramyPartFour.txt?raw'
import mechIShramyPartFiveText from './mechIShramyPartFive.txt?raw'
import friendsTogetherText from './friendsTogether.txt?raw'
import whenEverythingIsOkayText from './whenEverythingIsOkay.txt?raw'
import minSuAwakeningText from './minSuAwakening.txt?raw'
import minSuApologyText from './minSuApology.txt?raw'
import nedostoinyPartOneText from './nedostoinyPartOne.txt?raw'
import nedostoinyPartTwoText from './nedostoinyPartTwo.txt?raw'
import minSuThornsText from './minSuThorns.txt?raw'
import eugeneAndGirlsPartOneText from './eugeneAndGirlsPartOne.txt?raw'
import chejuInterviewPartOneText from './chejuInterviewPartOne.txt?raw'
import chejuRumiJinuInterviewPartOneText from './chejuRumiJinuInterviewPartOne.txt?raw'
import chejuRumiJinuInterviewPartTwoText from './chejuRumiJinuInterviewPartTwo.txt?raw'
import chejuRumiJinuInterviewPartThreeText from './chejuRumiJinuInterviewPartThree.txt?raw'
import chejuRumiJinuInterviewPartFourText from './chejuRumiJinuInterviewPartFour.txt?raw'
import chejuRumiJinuInterviewPartFiveText from './chejuRumiJinuInterviewPartFive.txt?raw'
import chejuRumiJinuInterviewPartSixText from './chejuRumiJinuInterviewPartSix.txt?raw'
import chejuRumiJinuInterviewPartSevenText from './chejuRumiJinuInterviewPartSeven.txt?raw'
import chejuRumiJinuInterviewPartEightText from './chejuRumiJinuInterviewPartEight.txt?raw'
import chejuRumiJinuInterviewPartNineText from './chejuRumiJinuInterviewPartNine.txt?raw'
import bowlingPartOneText from './bowlingPartOne.txt?raw'
import bowlingBabyFillerText from './bowlingBabyFiller.txt?raw'
import bowlingPartTwoText from './bowlingPartTwo.txt?raw'
import bowlingPartThreeText from './bowlingPartThree.txt?raw'
import bowlingPartFourText from './bowlingPartFour.txt?raw'
import bowlingPartFiveText from './bowlingPartFive.txt?raw'
import bowlingPartSixText from './bowlingPartSix.txt?raw'
import bowlingPartSevenText from './bowlingPartSeven.txt?raw'
import bowlingPartEightText from './bowlingPartEight.txt?raw'
import bowlingPartNineText from './bowlingPartNine.txt?raw'
import bowlingPartTenText from './bowlingPartTen.txt?raw'
import bowlingPartElevenText from './bowlingPartEleven.txt?raw'
import bowlingPartTwelveText from './bowlingPartTwelve.txt?raw'
import bowlingPartThirteenText from './bowlingPartThirteen.txt?raw'
import bowlingPartFourteenText from './bowlingPartFourteen.txt?raw'
import bowlingPartFifteenText from './bowlingPartFifteen.txt?raw'
import bowlingPartSixteenText from './bowlingPartSixteen.txt?raw'
import bowlingPartSeventeenText from './bowlingPartSeventeen.txt?raw'
import bowlingPartEighteenText from './bowlingPartEighteen.txt?raw'
import bowlingPartNineteenText from './bowlingPartNineteen.txt?raw'
import bowlingPartTwentyText from './bowlingPartTwenty.txt?raw'
import bowlingPartTwentyOneText from './bowlingPartTwentyOne.txt?raw'
import bowlingPartTwentyTwoText from './bowlingPartTwentyTwo.txt?raw'
import bowlingPartTwentyThreeText from './bowlingPartTwentyThree.txt?raw'
import bowlingPartTwentyFourText from './bowlingPartTwentyFour.txt?raw'
import bowlingPartTwentyFiveText from './bowlingPartTwentyFive.txt?raw'
import bowlingPartTwentySixText from './bowlingPartTwentySix.txt?raw'
import bowlingPartTwentySevenText from './bowlingPartTwentySeven.txt?raw'
import chejuHeartToHeartText from './chejuHeartToHeart.txt?raw'
import chejuPetalsRossText from './chejuPetalsRoss.txt?raw'
import chejuJinuConfessionText from './chejuJinuConfession.txt?raw'
import chejuBoltlivyiAtCampfireText from './chejuBoltlivyiAtCampfire.txt?raw'
import chejuMainPartOneText from './chejuMainPartOne.txt?raw'
import chejuMainPartTwoText from './chejuMainPartTwo.txt?raw'
import chejuMainPartThreeText from './chejuMainPartThree.txt?raw'
import chejuMainPartFourText from './chejuMainPartFour.txt?raw'
import chejuMainPartFiveText from './chejuMainPartFive.txt?raw'
import chejuMainPartSixText from './chejuMainPartSix.txt?raw'
import chejuMainPartSevenText from './chejuMainPartSeven.txt?raw'
import chejuMainPartEightText from './chejuMainPartEight.txt?raw'
import chejuMainPartNineText from './chejuMainPartNine.txt?raw'
import chejuMainPartTenText from './chejuMainPartTen.txt?raw'
import chejuMainPartElevenText from './chejuMainPartEleven.txt?raw'
import chejuMainPartTwelveText from './chejuMainPartTwelve.txt?raw'
import chejuMainPartThirteenText from './chejuMainPartThirteen.txt?raw'
import chejuMainPartFourteenText from './chejuMainPartFourteen.txt?raw'
import chejuMainPartFifteenText from './chejuMainPartFifteen.txt?raw'
import chejuMainPartSixteenText from './chejuMainPartSixteen.txt?raw'
import chejuMainPartSeventeenText from './chejuMainPartSeventeen.txt?raw'
import chejuMainPartEighteenText from './chejuMainPartEighteen.txt?raw'
import chejuMainPartNineteenText from './chejuMainPartNineteen.txt?raw'
import chejuMainPartTwentyText from './chejuMainPartTwenty.txt?raw'
import chejuMainPartTwentyOneText from './chejuMainPartTwentyOne.txt?raw'
import chejuMainPartTwentyTwoText from './chejuMainPartTwentyTwo.txt?raw'
import chejuMainPartTwentyThreeText from './chejuMainPartTwentyThree.txt?raw'
import chejuMainPartTwentyFourText from './chejuMainPartTwentyFour.txt?raw'
import chejuMainPartTwentyFiveText from './chejuMainPartTwentyFive.txt?raw'
import chejuMainPartTwentySixText from './chejuMainPartTwentySix.txt?raw'
import chejuMainPartTwentySevenText from './chejuMainPartTwentySeven.txt?raw'
import chejuMainPartTwentyEightText from './chejuMainPartTwentyEight.txt?raw'
import chejuKosterPartOneText from './chejuKosterPartOne.txt?raw'
import chejuKosterPartTwoText from './chejuKosterPartTwo.txt?raw'
import chejuKosterPartThreeText from './chejuKosterPartThree.txt?raw'
import chejuKosterPartFourText from './chejuKosterPartFour.txt?raw'
import chejuKosterPartFiveText from './chejuKosterPartFive.txt?raw'
import chejuKosterPartSixText from './chejuKosterPartSix.txt?raw'
import chejuKosterPartSevenText from './chejuKosterPartSeven.txt?raw'
import chejuKosterPartEightText from './chejuKosterPartEight.txt?raw'
import chejuKosterPartNineText from './chejuKosterPartNine.txt?raw'
import chejuKosterPartTenText from './chejuKosterPartTen.txt?raw'
import chejuKosterPartElevenText from './chejuKosterPartEleven.txt?raw'
import stydlivayaPartOneText from './stydlivayaPartOne.txt?raw'
import stydlivayaPartTwoText from './stydlivayaPartTwo.txt?raw'
import redThornsText from './redThorns.txt?raw'
import loveStruckGangsterText from './loveStruckGangster.txt?raw'
import whoToChooseText from './whoToChoose.txt?raw'
import stydlivayaMainPartTwoText from './stydlivayaMainPartTwo.txt?raw'
import stydlivayaMainPartThreeText from './stydlivayaMainPartThree.txt?raw'
import stydlivayaMainPartFourText from './stydlivayaMainPartFour.txt?raw'
import stydlivayaMainPartFiveText from './stydlivayaMainPartFive.txt?raw'
import stydlivayaMainPartSixText from './stydlivayaMainPartSix.txt?raw'
import stydlivayaMainPartSevenText from './stydlivayaMainPartSeven.txt?raw'
import stydlivayaMainPartEightText from './stydlivayaMainPartEight.txt?raw'
import razgovorZaKulisamiText from './razgovorZaKulisami.txt?raw'
import './App.css'

const publicAsset = (name) => `${import.meta.env.BASE_URL}${name}`

const stydlivayaMainPartOne = {
  id: 'stydlivaya-main-part-1',
  cycle: 'СТЫДЛИВАЯ И ЛОХМАТЫЙ',
  title: 'Стыдливая и Лохматый',
  part: 'Часть 1',
  category: 'main',
  paragraphs: stydlivayaPartOneText.trim().split(/\r?\n/).filter(Boolean),
  coverImage: {
    src: publicAsset('stydlivaya-i-lokhmaty-cover.jpg'),
    href: publicAsset('stydlivaya-i-lokhmaty-cover.jpg'),
  },
}

const stydlivayaFiller = {
  id: 'stydlivaya-filler-1',
  cycle: 'СТЫДЛИВАЯ И ЛОХМАТЫЙ',
  title: 'Лучшие друзья',
  part: 'Отдельная история',
  category: 'filler',
  paragraphs: stydlivayaPartTwoText.trim().split(/\r?\n/).filter(Boolean),
}

const redThornsStory = {
  id: 'stydlivaya-red-thorns',
  cycle: 'СТЫДЛИВАЯ И ЛОХМАТЫЙ',
  title: 'Красные шипы',
  part: 'Отдельная история',
  category: 'filler',
  paragraphs: redThornsText.trim().split(/\r?\n/).filter(Boolean),
}

const loveStruckGangsterStory = {
  id: 'stydlivaya-love-struck-gangster',
  cycle: 'СТЫДЛИВАЯ И ЛОХМАТЫЙ',
  title: 'Влюбленный гангстер',
  part: 'Отдельная история',
  category: 'filler',
  paragraphs: loveStruckGangsterText.trim().split(/\r?\n/).filter(Boolean),
}

const whoToChooseStory = {
  id: 'stydlivaya-who-to-choose',
  cycle: 'СТЫДЛИВАЯ И ЛОХМАТЫЙ',
  title: 'Кого выбрать?',
  part: 'Отдельная история',
  category: 'filler',
  paragraphs: whoToChooseText.trim().split(/\r?\n/).filter(Boolean),
}

const stydlivayaMainPartTwo = {
  id: 'stydlivaya-main-part-2',
  cycle: 'СТЫДЛИВАЯ И ЛОХМАТЫЙ',
  title: 'Стыдливая и Лохматый',
  part: 'Часть 2',
  category: 'main',
  paragraphs: stydlivayaMainPartTwoText.trim().split(/\r?\n/).filter(Boolean),
}

const stydlivayaMainPartThree = {
  id: 'stydlivaya-main-part-3',
  cycle: 'СТЫДЛИВАЯ И ЛОХМАТЫЙ',
  title: 'Стыдливая и Лохматый',
  part: 'Часть 3',
  category: 'main',
  paragraphs: stydlivayaMainPartThreeText.trim().split(/\r?\n/).filter(Boolean),
}

const stydlivayaMainPartFour = {
  id: 'stydlivaya-main-part-4',
  cycle: 'СТЫДЛИВАЯ И ЛОХМАТЫЙ',
  title: 'Стыдливая и Лохматый',
  part: 'Часть 4',
  category: 'main',
  paragraphs: stydlivayaMainPartFourText.trim().split(/\r?\n/).filter(Boolean),
}

const stydlivayaMainPartFive = {
  id: 'stydlivaya-main-part-5',
  cycle: 'СТЫДЛИВАЯ И ЛОХМАТЫЙ',
  title: 'Стыдливая и Лохматый',
  part: 'Часть 5',
  category: 'main',
  paragraphs: stydlivayaMainPartFiveText.trim().split(/\r?\n/).filter(Boolean),
}

const stydlivayaMainPartSix = {
  id: 'stydlivaya-main-part-6',
  cycle: 'СТЫДЛИВАЯ И ЛОХМАТЫЙ',
  title: 'Стыдливая и Лохматый',
  part: 'Часть 6',
  category: 'main',
  paragraphs: stydlivayaMainPartSixText.trim().split(/\r?\n/).filter(Boolean),
}

const stydlivayaMainPartSeven = {
  id: 'stydlivaya-main-part-7',
  cycle: 'СТЫДЛИВАЯ И ЛОХМАТЫЙ',
  title: 'Стыдливая и Лохматый',
  part: 'Часть 7',
  category: 'main',
  paragraphs: stydlivayaMainPartSevenText.trim().split(/\r?\n/).filter(Boolean),
}

const stydlivayaMainPartEight = {
  id: 'stydlivaya-main-part-8',
  cycle: 'СТЫДЛИВАЯ И ЛОХМАТЫЙ',
  title: 'Стыдливая и Лохматый',
  part: 'Часть 8',
  category: 'main',
  paragraphs: stydlivayaMainPartEightText.trim().split(/\r?\n/).filter(Boolean),
}

const stydlivayaMainParts = [
  stydlivayaMainPartOne,
  stydlivayaMainPartTwo,
  stydlivayaMainPartThree,
  stydlivayaMainPartFour,
  stydlivayaMainPartFive,
  stydlivayaMainPartSix,
  stydlivayaMainPartSeven,
  stydlivayaMainPartEight,
]
const razgovorZaKulisamiStory = {
  id: 'razgovor-za-kulisami',
  cycle: 'РАЗГОВОР ЗА КУЛИСАМИ',
  title: 'Разговор за кулисами',
  part: 'Филлер',
  category: 'filler',
  paragraphs: razgovorZaKulisamiText.trim().split(/\r?\n/).filter(Boolean),
}
const bestFriendsStory = {
  id: 'best-friends-ranenaya',
  cycle: 'РАНЕНАЯ ОХОТНИЦА И ВЛЮБЛЁННЫЙ ДЕМОН',
  title: 'Лучшие друзья',
  part: 'Отдельная история',
  category: 'filler',
  paragraphs: ranenayaBestFriendsText.trim().split(/\r?\n/),
  excerpt: ranenayaBestFriendsText.trim().split(/\r?\n/, 1)[0],
}
const confessionZoeStory = {
  id: 'confession-zoe-ranenaya',
  cycle: 'РАНЕНАЯ ОХОТНИЦА И ВЛЮБЛЁННЫЙ ДЕМОН',
  title: 'Признание Зои',
  part: 'Филлер',
  category: 'filler',
  paragraphs: stydlivayaPartOneText.trim().split(/\r?\n/).filter(Boolean),
}
const friendsTogetherStory = {
  id: 'friends-together-mech-i-shramy',
  cycle: 'МЕЧ И ШРАМЫ',
  title: 'Друзья вместе',
  part: 'Филлер',
  category: 'filler',
  paragraphs: friendsTogetherText.trim().split(/\r?\n/).filter(Boolean),
}
const whenEverythingIsOkayStory = {
  id: 'when-everything-is-okay-mech-i-shramy',
  cycle: 'МЕЧ И ШРАМЫ',
  title: 'Когда всё в порядке',
  part: 'Филлер',
  category: 'filler',
  paragraphs: whenEverythingIsOkayText.trim().split(/\r?\n/).filter(Boolean),
}
const minSuAwakeningStory = {
  id: 'min-su-awakening',
  cycle: 'ПРОБУЖДЕНИЕ МИН-СУ',
  title: 'Пробуждение Мин-су',
  part: 'Филлер',
  category: 'filler',
  paragraphs: minSuAwakeningText.trim().split(/\r?\n/).filter(Boolean),
  coverImage: {
    src: publicAsset('min-su-awakening-cover.png'),
    href: publicAsset('min-su-awakening-cover.png'),
  },
}
const minSuApologyRussianText = 'Милые дамы! Я молю о вашем прощении на коленях! Сжальтесь надо мной, ведь я так ничтожен и жалок. Я виноват перед каждой из вас… но больше всего перед тобой…\n\nТы была моим светом, и с твоим уходом, радость жизни да и сама жизнь угасли безвозвратно…\n\nГде бы ты ни была: я искренне любил тебя!'
const minSuApologyParagraphs = minSuApologyText.trim().split(/\r?\n/).filter(Boolean)
const minSuApologyItalianStart = minSuApologyParagraphs.findIndex((paragraph) => paragraph.startsWith('Care signore!'))
const minSuApologyItalianParagraphs = minSuApologyParagraphs.slice(minSuApologyItalianStart, minSuApologyItalianStart + 3)
const minSuApologyStory = {
  id: 'min-su-apology',
  cycle: 'ПРОБУЖДЕНИЕ МИН-СУ',
  title: 'Извинения',
  part: 'SPECIAL',
  category: 'special',
  paragraphs: minSuApologyParagraphs.flatMap((paragraph, index) => {
    if (index === minSuApologyItalianStart) {
      return [{
        type: 'translation',
        value: minSuApologyItalianParagraphs.join('\n\n'),
        translation: minSuApologyRussianText,
      }]
    }

    if (index > minSuApologyItalianStart && index < minSuApologyItalianStart + minSuApologyItalianParagraphs.length) {
      return []
    }

    return [paragraph]
  }),
}
const minSuThornsStory = {
  id: 'min-su-thorns',
  cycle: 'ПРОБУЖДЕНИЕ МИН-СУ',
  title: 'Некрасные шипы',
  part: 'Филлер',
  category: 'filler',
  paragraphs: minSuThornsText.trim().split(/\r?\n/).filter(Boolean),
}
const mechIShramyPartOne = {
  id: 'mech-i-shramy-part-1',
  cycle: 'МЕЧ И ШРАМЫ',
  title: 'Меч и Шрамы',
  part: 'Часть 1',
  category: 'main',
  paragraphs: mechIShramyPartOneText.trim().split(/\r?\n/).filter(Boolean),
}
const mechIShramyPartTwo = {
  id: 'mech-i-shramy-part-2',
  cycle: 'МЕЧ И ШРАМЫ',
  title: 'Меч и Шрамы',
  part: 'Часть 2',
  category: 'main',
  paragraphs: mechIShramyPartTwoText.trim().split(/\r?\n/).filter(Boolean),
}
const mechIShramyPartThree = {
  id: 'mech-i-shramy-part-3',
  cycle: 'МЕЧ И ШРАМЫ',
  title: 'Меч и Шрамы',
  part: 'Часть 3',
  category: 'main',
  paragraphs: mechIShramyPartThreeText.trim().split(/\r?\n/).filter(Boolean),
}
const mechIShramyPartFour = {
  id: 'mech-i-shramy-part-4',
  cycle: 'МЕЧ И ШРАМЫ',
  title: 'Меч и Шрамы',
  part: 'Часть 4',
  category: 'main',
  paragraphs: mechIShramyPartFourText.trim().split(/\r?\n/).filter(Boolean),
}
const mechIShramyPartFive = {
  id: 'mech-i-shramy-part-5',
  cycle: 'МЕЧ И ШРАМЫ',
  title: 'Меч и Шрамы',
  part: 'Часть 5',
  category: 'main',
  paragraphs: mechIShramyPartFiveText.trim().split(/\r?\n/).filter(Boolean),
}
const mechIShramyParts = [
  mechIShramyPartOne,
  mechIShramyPartTwo,
  mechIShramyPartThree,
  mechIShramyPartFour,
  mechIShramyPartFive,
]
const nedostoinyPartOne = {
  id: 'nedostoiny-part-1',
  cycle: 'МЕЧ И ШРАМЫ • SPECIAL «НЕДОСТОЙНЫЙ»',
  title: 'Недостойный',
  part: 'Часть 1',
  category: 'special',
  paragraphs: nedostoinyPartOneText.trim().split(/\r?\n/).filter(Boolean),
}
const nedostoinyPartTwo = {
  id: 'nedostoiny-part-2',
  cycle: 'МЕЧ И ШРАМЫ • SPECIAL «НЕДОСТОЙНЫЙ»',
  title: 'Недостойный',
  part: 'Часть 2 — И снова вместе',
  category: 'special',
  paragraphs: nedostoinyPartTwoText.trim().split(/\r?\n/).filter(Boolean),
}
const nedostoinyParts = [nedostoinyPartOne, nedostoinyPartTwo]
const eugeneAndGirlsPartOne = {
  id: 'eugene-and-girls-part-1',
  cycle: 'ЮДЖИН И ДЕВЧОНКИ',
  title: 'Возмездие и извинения',
  part: 'SPECIAL · Часть 1',
  category: 'special',
  paragraphs: eugeneAndGirlsPartOneText.trim().split(/\r?\n/).filter(Boolean),
}
const eugeneAndGirlsParts = [eugeneAndGirlsPartOne]
const chejuInterviewPartOne = {
  id: 'cheju-interview-part-1',
  cycle: 'ЧЕДЖУ • ПАРОЧКА НА ИНТЕРВЬЮ',
  title: 'Парочка на интервью',
  part: 'Часть 1',
  category: 'filler',
  paragraphs: chejuInterviewPartOneText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuInterviewParts = [chejuInterviewPartOne]
const chejuRumiJinuInterviewPartOne = {
  id: 'cheju-rumi-jinu-interview-part-1',
  cycle: 'ЧЕДЖУ • ИНТЕРВЬЮ РУМИ И ДЖИНУ',
  title: 'Интервью Руми и Джину',
  part: 'Часть 1',
  category: 'filler',
  coverImage: {
    src: publicAsset('cheju-rumi-jinu-interview-cover.png'),
    href: publicAsset('cheju-rumi-jinu-interview-cover.png'),
  },
  paragraphs: chejuRumiJinuInterviewPartOneText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuRumiJinuInterviewPartTwo = {
  id: 'cheju-rumi-jinu-interview-part-2',
  cycle: 'ИНТЕРВЬЮ РУМИ И ДЖИНУ',
  title: 'Интервью Руми и Джину',
  part: 'Часть 2',
  category: 'filler',
  paragraphs: chejuRumiJinuInterviewPartTwoText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuRumiJinuInterviewPartThree = {
  id: 'cheju-rumi-jinu-interview-part-3',
  cycle: 'ИНТЕРВЬЮ РУМИ И ДЖИНУ',
  title: 'Интервью Руми и Джину',
  part: 'Часть 3',
  category: 'filler',
  paragraphs: chejuRumiJinuInterviewPartThreeText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuRumiJinuInterviewPartFour = {
  id: 'cheju-rumi-jinu-interview-part-4',
  cycle: 'ИНТЕРВЬЮ РУМИ И ДЖИНУ',
  title: 'Интервью Руми и Джину',
  part: 'Часть 4',
  category: 'filler',
  paragraphs: chejuRumiJinuInterviewPartFourText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuRumiJinuInterviewPartFive = {
  id: 'cheju-rumi-jinu-interview-part-5',
  cycle: 'ИНТЕРВЬЮ РУМИ И ДЖИНУ',
  title: 'Интервью Руми и Джину',
  part: 'Часть 5',
  category: 'filler',
  paragraphs: chejuRumiJinuInterviewPartFiveText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuRumiJinuInterviewPartSix = {
  id: 'cheju-rumi-jinu-interview-part-6',
  cycle: 'ИНТЕРВЬЮ РУМИ И ДЖИНУ',
  title: 'Интервью Руми и Джину',
  part: 'Часть 6',
  category: 'filler',
  paragraphs: chejuRumiJinuInterviewPartSixText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuRumiJinuInterviewPartSeven = {
  id: 'cheju-rumi-jinu-interview-part-7',
  cycle: 'ИНТЕРВЬЮ РУМИ И ДЖИНУ',
  title: 'Интервью Руми и Джину',
  part: 'Часть 7',
  category: 'filler',
  paragraphs: chejuRumiJinuInterviewPartSevenText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuRumiJinuInterviewPartEight = {
  id: 'cheju-rumi-jinu-interview-part-8',
  cycle: 'ИНТЕРВЬЮ РУМИ И ДЖИНУ',
  title: 'Интервью Руми и Джину',
  part: 'Часть 8',
  category: 'filler',
  paragraphs: chejuRumiJinuInterviewPartEightText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuRumiJinuInterviewPartNine = {
  id: 'cheju-rumi-jinu-interview-part-9',
  cycle: 'ИНТЕРВЬЮ РУМИ И ДЖИНУ',
  title: 'Интервью Руми и Джину',
  part: 'Часть 9',
  category: 'filler',
  paragraphs: chejuRumiJinuInterviewPartNineText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuRumiJinuInterviewParts = [
  chejuRumiJinuInterviewPartOne,
  chejuRumiJinuInterviewPartTwo,
  chejuRumiJinuInterviewPartThree,
  chejuRumiJinuInterviewPartFour,
  chejuRumiJinuInterviewPartFive,
  chejuRumiJinuInterviewPartSix,
  chejuRumiJinuInterviewPartSeven,
  chejuRumiJinuInterviewPartEight,
  chejuRumiJinuInterviewPartNine,
]
const bowlingPartOne = {
  id: 'bowling-main-part-1',
  cycle: 'БОУЛИНГ',
  title: 'Боулинг',
  part: 'Часть 1',
  category: 'main',
  coverImage: {
    src: publicAsset('bowling-cover.png'),
    href: publicAsset('bowling-cover.png'),
  },
  paragraphs: bowlingPartOneText.trim().split(/\r?\n/).filter(Boolean),
}
const bowlingBabyFiller = {
  id: 'bowling-baby-filler',
  cycle: 'БОУЛИНГ',
  title: 'Бейби поплыл',
  part: 'Филлер',
  category: 'filler',
  paragraphs: bowlingBabyFillerText.trim().split(/\r?\n/).filter(Boolean),
}
const createBowlingPart = (number, text) => ({
  id: `bowling-main-part-${number}`,
  cycle: 'БОУЛИНГ',
  title: 'Боулинг',
  part: `Часть ${number}`,
  category: 'main',
  paragraphs: text.trim().split(/\r?\n/).filter(Boolean),
})
const bowlingMainParts = [
  bowlingPartOne,
  createBowlingPart(2, bowlingPartTwoText),
  createBowlingPart(3, bowlingPartThreeText),
  createBowlingPart(4, bowlingPartFourText),
  createBowlingPart(5, bowlingPartFiveText),
  createBowlingPart(6, bowlingPartSixText),
  createBowlingPart(7, bowlingPartSevenText),
  createBowlingPart(8, bowlingPartEightText),
  createBowlingPart(9, bowlingPartNineText),
  createBowlingPart(10, bowlingPartTenText),
  createBowlingPart(11, bowlingPartElevenText),
  createBowlingPart(12, bowlingPartTwelveText),
  createBowlingPart(13, bowlingPartThirteenText),
  createBowlingPart(14, bowlingPartFourteenText),
  createBowlingPart(15, bowlingPartFifteenText),
  createBowlingPart(16, bowlingPartSixteenText),
  createBowlingPart(17, bowlingPartSeventeenText),
  createBowlingPart(18, bowlingPartEighteenText),
  createBowlingPart(19, bowlingPartNineteenText),
  createBowlingPart(20, bowlingPartTwentyText),
  createBowlingPart(21, bowlingPartTwentyOneText),
  createBowlingPart(22, bowlingPartTwentyTwoText),
  createBowlingPart(23, bowlingPartTwentyThreeText),
  createBowlingPart(24, bowlingPartTwentyFourText),
  createBowlingPart(25, bowlingPartTwentyFiveText),
  createBowlingPart(26, bowlingPartTwentySixText),
  createBowlingPart(27, bowlingPartTwentySevenText),
]
const chejuHeartToHeartStory = {
  id: 'cheju-heart-to-heart',
  cycle: 'ЧЕДЖУ • РАЗГОВОР ПО ДУШАМ',
  title: 'Разговор по душам',
  category: 'filler',
  paragraphs: chejuHeartToHeartText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuPetalsRossStory = {
  id: 'cheju-rossa-on-petals',
  cycle: 'ЧЕДЖУ • РОССА НА ЛЕПЕСТКАХ',
  title: 'Роса на лепестках',
  category: 'filler',
  paragraphs: chejuPetalsRossText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuJinuConfessionStory = {
  id: 'cheju-jinu-confession',
  cycle: 'ЧЕДЖУ • ПРИЗНАНИЕ ДЖИНУ',
  title: 'Признание Джину',
  category: 'filler',
  paragraphs: chejuJinuConfessionText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuBoltlivyiAtCampfireStory = {
  id: 'cheju-boltlivyi-at-campfire',
  cycle: 'ЧЕДЖУ • БОЛТЛИВЫЙ У КОСТРА',
  title: 'Болтливый у костра',
  category: 'filler',
  paragraphs: chejuBoltlivyiAtCampfireText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartOne = {
  id: 'cheju-main-part-1',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 1',
  category: 'main',
  paragraphs: chejuMainPartOneText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartTwo = {
  id: 'cheju-main-part-2',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 2',
  category: 'main',
  paragraphs: chejuMainPartTwoText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartThree = {
  id: 'cheju-main-part-3',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 3',
  category: 'main',
  paragraphs: chejuMainPartThreeText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartFour = {
  id: 'cheju-main-part-4',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 4',
  category: 'main',
  paragraphs: chejuMainPartFourText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartFive = {
  id: 'cheju-main-part-5',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 5',
  category: 'main',
  paragraphs: chejuMainPartFiveText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartSix = {
  id: 'cheju-main-part-6',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 6',
  category: 'main',
  paragraphs: chejuMainPartSixText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartSeven = {
  id: 'cheju-main-part-7',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 7',
  category: 'main',
  paragraphs: chejuMainPartSevenText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartEight = {
  id: 'cheju-main-part-8',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 8',
  category: 'main',
  paragraphs: chejuMainPartEightText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartNine = {
  id: 'cheju-main-part-9',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 9',
  category: 'main',
  paragraphs: chejuMainPartNineText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartTen = {
  id: 'cheju-main-part-10',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 10',
  category: 'main',
  paragraphs: chejuMainPartTenText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartEleven = {
  id: 'cheju-main-part-11',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 11',
  category: 'main',
  paragraphs: chejuMainPartElevenText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartTwelve = {
  id: 'cheju-main-part-12',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 12',
  category: 'main',
  paragraphs: chejuMainPartTwelveText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartThirteen = {
  id: 'cheju-main-part-13',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 13',
  category: 'main',
  paragraphs: chejuMainPartThirteenText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartFourteen = {
  id: 'cheju-main-part-14',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 14',
  category: 'main',
  paragraphs: chejuMainPartFourteenText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartFifteen = {
  id: 'cheju-main-part-15',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 15',
  category: 'main',
  paragraphs: chejuMainPartFifteenText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartSixteen = {
  id: 'cheju-main-part-16',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 16',
  category: 'main',
  paragraphs: chejuMainPartSixteenText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartSeventeen = {
  id: 'cheju-main-part-17',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 17',
  category: 'main',
  paragraphs: chejuMainPartSeventeenText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartEighteen = {
  id: 'cheju-main-part-18',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 18',
  category: 'main',
  paragraphs: chejuMainPartEighteenText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartNineteen = {
  id: 'cheju-main-part-19',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 19',
  category: 'main',
  paragraphs: chejuMainPartNineteenText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartTwenty = {
  id: 'cheju-main-part-20',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 20',
  category: 'main',
  paragraphs: chejuMainPartTwentyText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartTwentyOne = {
  id: 'cheju-main-part-21',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 21',
  category: 'main',
  paragraphs: chejuMainPartTwentyOneText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartTwentyTwo = {
  id: 'cheju-main-part-22',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 22',
  category: 'main',
  paragraphs: chejuMainPartTwentyTwoText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartTwentyThree = {
  id: 'cheju-main-part-23',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 23',
  category: 'main',
  paragraphs: chejuMainPartTwentyThreeText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartTwentyFour = {
  id: 'cheju-main-part-24',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 24',
  category: 'main',
  paragraphs: chejuMainPartTwentyFourText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartTwentyFive = {
  id: 'cheju-main-part-25',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 25',
  category: 'main',
  paragraphs: chejuMainPartTwentyFiveText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartTwentySix = {
  id: 'cheju-main-part-26',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 26',
  category: 'main',
  paragraphs: chejuMainPartTwentySixText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartTwentySeven = {
  id: 'cheju-main-part-27',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 27',
  category: 'main',
  paragraphs: chejuMainPartTwentySevenText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainPartTwentyEight = {
  id: 'cheju-main-part-28',
  cycle: 'ЧЕДЖУ',
  title: 'Чеджу',
  part: 'Часть 28',
  category: 'main',
  paragraphs: chejuMainPartTwentyEightText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuMainParts = [
  chejuMainPartOne,
  chejuMainPartTwo,
  chejuMainPartThree,
  chejuMainPartFour,
  chejuMainPartFive,
  chejuMainPartSix,
  chejuMainPartSeven,
  chejuMainPartEight,
  chejuMainPartNine,
  chejuMainPartTen,
  chejuMainPartEleven,
  chejuMainPartTwelve,
  chejuMainPartThirteen,
  chejuMainPartFourteen,
  chejuMainPartFifteen,
  chejuMainPartSixteen,
  chejuMainPartSeventeen,
  chejuMainPartEighteen,
  chejuMainPartNineteen,
  chejuMainPartTwenty,
  chejuMainPartTwentyOne,
  chejuMainPartTwentyTwo,
  chejuMainPartTwentyThree,
  chejuMainPartTwentyFour,
  chejuMainPartTwentyFive,
  chejuMainPartTwentySix,
  chejuMainPartTwentySeven,
  chejuMainPartTwentyEight,
]
const chejuKosterPartOne = {
  id: 'cheju-koster-part-1',
  cycle: 'ЧЕДЖУ • У КОСТРА',
  title: 'У костра',
  part: 'Часть 1',
  category: 'filler',
  paragraphs: chejuKosterPartOneText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuKosterPartTwo = {
  id: 'cheju-koster-part-2',
  cycle: 'ЧЕДЖУ • У КОСТРА',
  title: 'У костра',
  part: 'Часть 2',
  category: 'filler',
  paragraphs: chejuKosterPartTwoText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuKosterPartThree = {
  id: 'cheju-koster-part-3',
  cycle: 'ЧЕДЖУ • У КОСТРА',
  title: 'У костра',
  part: 'Часть 3',
  category: 'filler',
  paragraphs: chejuKosterPartThreeText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuKosterPartFour = {
  id: 'cheju-koster-part-4',
  cycle: 'ЧЕДЖУ • У КОСТРА',
  title: 'У костра',
  part: 'Часть 4',
  category: 'filler',
  paragraphs: chejuKosterPartFourText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuKosterPartFive = {
  id: 'cheju-koster-part-5',
  cycle: 'ЧЕДЖУ • У КОСТРА',
  title: 'У костра',
  part: 'Часть 5',
  category: 'filler',
  paragraphs: chejuKosterPartFiveText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuKosterPartSix = {
  id: 'cheju-koster-part-6',
  cycle: 'ЧЕДЖУ • У КОСТРА',
  title: 'У костра',
  part: 'Часть 6',
  category: 'filler',
  paragraphs: chejuKosterPartSixText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuKosterPartSeven = {
  id: 'cheju-koster-part-7',
  cycle: 'ЧЕДЖУ • У КОСТРА',
  title: 'У костра',
  part: 'Часть 7',
  category: 'filler',
  paragraphs: chejuKosterPartSevenText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuKosterPartEight = {
  id: 'cheju-koster-part-8',
  cycle: 'ЧЕДЖУ • У КОСТРА',
  title: 'У костра',
  part: 'Часть 8',
  category: 'filler',
  paragraphs: chejuKosterPartEightText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuKosterPartNine = {
  id: 'cheju-koster-part-9',
  cycle: 'ЧЕДЖУ • У КОСТРА',
  title: 'У костра',
  part: 'Часть 9',
  category: 'filler',
  paragraphs: chejuKosterPartNineText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuKosterPartTen = {
  id: 'cheju-koster-part-10',
  cycle: 'ЧЕДЖУ • У КОСТРА',
  title: 'У костра',
  part: 'Часть 10',
  category: 'filler',
  paragraphs: chejuKosterPartTenText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuKosterPartEleven = {
  id: 'cheju-koster-part-11',
  cycle: 'ЧЕДЖУ • У КОСТРА',
  title: 'У костра',
  part: 'Часть 11',
  category: 'filler',
  paragraphs: chejuKosterPartElevenText.trim().split(/\r?\n/).filter(Boolean),
}
const chejuKosterParts = [
  chejuKosterPartOne,
  chejuKosterPartTwo,
  chejuKosterPartThree,
  chejuKosterPartFour,
  chejuKosterPartFive,
  chejuKosterPartSix,
  chejuKosterPartSeven,
  chejuKosterPartEight,
  chejuKosterPartNine,
  chejuKosterPartTen,
  chejuKosterPartEleven,
]

const ranenayaFirstLine = ranenayaPartOneText.split(/\r?\n/, 1)[0]
const ranenayaImageLinkStart = '[![]('
const ranenayaImageLinkEnd = ranenayaFirstLine.indexOf(')](', ranenayaImageLinkStart.length)
const ranenayaImageLinkClose = ranenayaFirstLine.lastIndexOf(')')
const ranenayaImageMatch = ranenayaImageLinkEnd === -1 || ranenayaImageLinkClose === -1
  ? null
  : {
      src: ranenayaFirstLine.slice(ranenayaImageLinkStart.length, ranenayaImageLinkEnd),
      href: ranenayaFirstLine.slice(ranenayaImageLinkEnd + 3, ranenayaImageLinkClose),
      text: ranenayaFirstLine.slice(ranenayaImageLinkClose + 1),
    }
const ranenayaPartOneParagraphs = [
  ranenayaImageMatch?.text ?? ranenayaFirstLine,
  ...ranenayaPartOneText.split(/\r?\n/).slice(1),
].filter((paragraph) => paragraph.length > 0)

const ranenayaParts = [
  {
    id: 'ranenaya-mira-abby-part-1',
    cycle: 'РАНЕНАЯ ОХОТНИЦА И ВЛЮБЛЁННЫЙ ДЕМОН',
    title: 'Разговор в спортзале',
    part: 'Часть 1',
    category: 'filler',
    paragraphs: ranenayaPartOneParagraphs,
    coverImage: ranenayaImageMatch
      ? { src: ranenayaImageMatch.src, href: ranenayaImageMatch.href }
      : undefined,
    excerpt: ranenayaPartOneParagraphs[0],
  },
]

const ranenayaMainPartOneBlocks = ranenayaMainPartOneText
  .trim()
  .split(/\r?\n/)
  .flatMap((line) => {
    if (/^\*\*\d+\*\*$/.test(line)) return []

    const imageStart = line.indexOf('[![](')
    if (imageStart === -1) return line ? [{ type: 'text', value: line }] : []

    const imageUrlEnd = line.indexOf(')](', imageStart + '[![]('.length)
    const imageLinkEnd = line.indexOf(')', imageUrlEnd + 3)
    if (imageUrlEnd === -1 || imageLinkEnd === -1) {
      throw new Error('Could not parse an illustration link in the wounded-huntress chapter')
    }

    const beforeImage = line.slice(0, imageStart)
    const afterImage = line.slice(imageLinkEnd + 1)
    return [
      ...(beforeImage ? [{ type: 'text', value: beforeImage }] : []),
      ...(afterImage ? [{ type: 'text', value: afterImage }] : []),
    ]
  })

const ranenayaMainPartOne = {
  id: 'ranenaya-main-part-1',
  cycle: 'РАНЕНАЯ ОХОТНИЦА И ВЛЮБЛЁННЫЙ ДЕМОН',
  title: 'Раненая охотница и влюблённый демон',
  part: 'Часть 1',
  category: 'main',
  paragraphs: ranenayaMainPartOneBlocks,
  coverImage: {
    src: publicAsset('ranenaya-ohotnitsa-illustration.png'),
    href: publicAsset('ranenaya-ohotnitsa-illustration.png'),
  },
  excerpt: ranenayaMainPartOneBlocks.find((block) => block.type === 'text')?.value,
}

const ranenayaMainPartTwo = {
  id: 'ranenaya-main-part-2',
  cycle: 'РАНЕНАЯ ОХОТНИЦА И ВЛЮБЛЁННЫЙ ДЕМОН',
  title: 'Раненая охотница и влюблённый демон',
  part: 'Часть 2',
  category: 'main',
  paragraphs: ranenayaMainPartTwoText.trim().split(/\r?\n/).filter(Boolean),
}

const ranenayaMainPartThree = {
  id: 'ranenaya-main-part-3',
  cycle: 'РАНЕНАЯ ОХОТНИЦА И ВЛЮБЛЁННЫЙ ДЕМОН',
  title: 'Раненая охотница и влюблённый демон',
  part: 'Часть 3',
  category: 'main',
  paragraphs: ranenayaMainPartThreeText.trim().split(/\r?\n/).filter(Boolean),
}

const ranenayaMainPartFour = {
  id: 'ranenaya-main-part-4',
  cycle: 'РАНЕНАЯ ОХОТНИЦА И ВЛЮБЛЁННЫЙ ДЕМОН',
  title: 'Раненая охотница и влюблённый демон',
  part: 'Часть 4',
  category: 'main',
  paragraphs: ranenayaMainPartFourText.trim().split(/\r?\n/).filter(Boolean),
}

const ranenayaMainPartFive = {
  id: 'ranenaya-main-part-5',
  cycle: 'РАНЕНАЯ ОХОТНИЦА И ВЛЮБЛЁННЫЙ ДЕМОН',
  title: 'Раненая охотница и влюблённый демон',
  part: 'Часть 5',
  category: 'main',
  paragraphs: ranenayaMainPartFiveText.trim().split(/\r?\n/).filter(Boolean),
}

const ranenayaMainPartSix = {
  id: 'ranenaya-main-part-6',
  cycle: 'РАНЕНАЯ ОХОТНИЦА И ВЛЮБЛЁННЫЙ ДЕМОН',
  title: 'Раненая охотница и влюблённый демон',
  part: 'Часть 6',
  category: 'main',
  paragraphs: ranenayaMainPartSixText.trim().split(/\r?\n/).filter(Boolean),
}

const ranenayaMainPartSeven = {
  id: 'ranenaya-main-part-7',
  cycle: 'РАНЕНАЯ ОХОТНИЦА И ВЛЮБЛЁННЫЙ ДЕМОН',
  title: 'Раненая охотница и влюблённый демон',
  part: 'Часть 7',
  category: 'main',
  paragraphs: ranenayaMainPartSevenText.trim().split(/\r?\n/).filter(Boolean),
}

const ranenayaMainPartEight = {
  id: 'ranenaya-main-part-8',
  cycle: 'РАНЕНАЯ ОХОТНИЦА И ВЛЮБЛЁННЫЙ ДЕМОН',
  title: 'Раненая охотница и влюблённый демон',
  part: 'Часть 8',
  category: 'main',
  paragraphs: ranenayaMainPartEightText.trim().split(/\r?\n/).filter(Boolean),
}

const ranenayaMainPartNine = {
  id: 'ranenaya-main-part-9',
  cycle: 'РАНЕНАЯ ОХОТНИЦА И ВЛЮБЛЁННЫЙ ДЕМОН',
  title: 'Раненая охотница и влюблённый демон',
  part: 'Часть 9',
  category: 'main',
  paragraphs: ranenayaMainPartNineText.trim().split(/\r?\n/).filter(Boolean),
}

const ranenayaMainPartTen = {
  id: 'ranenaya-main-part-10',
  cycle: 'РАНЕНАЯ ОХОТНИЦА И ВЛЮБЛЁННЫЙ ДЕМОН',
  title: 'Раненая охотница и влюблённый демон',
  part: 'Часть 10',
  category: 'main',
  paragraphs: ranenayaMainPartTenText.trim().split(/\r?\n/).filter(Boolean),
}

const ranenayaMainParts = [
  ranenayaMainPartOne,
  ranenayaMainPartTwo,
  ranenayaMainPartThree,
  ranenayaMainPartFour,
  ranenayaMainPartFive,
  ranenayaMainPartSix,
  ranenayaMainPartSeven,
  ranenayaMainPartEight,
  ranenayaMainPartNine,
  ranenayaMainPartTen,
]

const gromParts = gromStoryText
  .trim()
  .replace(/(^|\r?\n)(\*\*\d+\*\*|\d+)(?=\r?\n)/g, '$1\n$2')
  .split(/\r?\n\s*\r?\n/)
  .filter((paragraph) => !paragraph.startsWith('# '))
  .reduce((parts, paragraph) => {
    if (/^(?:\*\*\d+\*\*|\d+)$/.test(paragraph)) {
      parts.push([])
    } else {
      parts.at(-1).push(paragraph)
    }

    return parts
  }, [[]])
  .filter((paragraphs) => paragraphs.length > 0)
  .map((paragraphs, index) => ({
    id: `grom-v-nebe-hantrix-part-${index + 1}`,
    cycle: 'ГРОМ В НЕБЕ ХАНТРИКС',
    title: 'Гром в небе Хантрикс',
    part: `Часть ${index + 1}`,
    paragraphs,
    coverImage: index === 0
      ? {
          src: publicAsset('grom-v-nebe-hantrix-illustration.png'),
          href: publicAsset('grom-v-nebe-hantrix-illustration.png'),
        }
      : undefined,
    excerpt: index === 0 ? paragraphs[0] : undefined,
  }))

const stydlivayaStoryParts = [...stydlivayaMainParts, stydlivayaFiller, redThornsStory, loveStruckGangsterStory, whoToChooseStory]
const storyParts = [...publishedStoryParts, ...gromParts, ...ranenayaMainParts, ...ranenayaParts, ...stydlivayaStoryParts, ...mechIShramyParts, ...nedostoinyParts, ...eugeneAndGirlsParts, ...chejuInterviewParts, ...chejuRumiJinuInterviewParts, ...bowlingMainParts, bowlingBabyFiller, chejuHeartToHeartStory, chejuPetalsRossStory, chejuJinuConfessionStory, chejuBoltlivyiAtCampfireStory, ...chejuMainParts, ...chejuKosterParts, razgovorZaKulisamiStory, bestFriendsStory, confessionZoeStory, friendsTogetherStory, whenEverythingIsOkayStory, minSuAwakeningStory, minSuApologyStory, minSuThornsStory, firstDateStory, secondDateStory]
const gangnamParts = publishedStoryParts.filter((story) => story.id.startsWith('gangnam-part-'))
const gromStory = gromParts[0]
const gromPublishedEntry = {
  id: 'grom-story',
  story: gromStory,
  cardDescription: 'О том, как девчонки стали Хантрикс',
  partCount: gromParts.length,
  readTarget: gromParts[0].id,
  childStories: [firstDateStory, secondDateStory].map((story) => ({
    story,
    readTarget: story.id,
    partCategory: 'filler',
  })),
}
const ranenayaArcEntry = {
  id: 'ranenaya-arc',
  story: {
    cycle: 'ОСНОВНАЯ ЛИНИЯ',
    title: 'Раненая охотница и влюблённый демон',
    part: 'Мира + Эбби',
    excerpt: 'Основная сюжетная линия о Мире и Эбби.',
    paragraphs: [],
    coverImage: ranenayaMainPartOne.coverImage,
  },
  cardDescription: 'Основная сюжетная линия о Мире и Эбби.',
  partCount: ranenayaMainParts.length,
  href: 'https://boosty.to/eugeneuvarov/posts/f2aae97f-8200-4064-9f95-7b06176809d2?share=success_publish_link',
  childStories: [ranenayaMainPartOne, ...ranenayaParts, bestFriendsStory, confessionZoeStory].map((story) => ({
    story,
    readTarget: story.id,
    partCategory: story.category,
    contentType: ranenayaMainParts.includes(story) ? 'main' : 'filler',
  })),
}
const stydlivayaArcEntry = {
  id: 'stydlivaya-arc',
  story: stydlivayaMainPartOne,
  cardDescription: 'Зои пытается разобраться в чувствах и понять, каково это — любить.',
  partCount: stydlivayaMainParts.length,
  readTarget: stydlivayaMainPartOne.id,
  childStories: [stydlivayaFiller, redThornsStory, loveStruckGangsterStory, whoToChooseStory].map((story) => ({
    story,
    readTarget: story.id,
    partCategory: story.category,
  })),
}
const mechIShramyEntry = {
  id: 'mech-i-shramy',
  story: {
    cycle: 'ОСНОВНАЯ ЛИНИЯ',
    title: 'Меч и Шрамы',
    part: 'Основная линия',
    excerpt: 'Основная линия о поисках Джину и примирении с ним.',
    paragraphs: [],
    coverImage: {
      src: publicAsset('mech-i-shramy-cover.png'),
      href: publicAsset('mech-i-shramy-cover.png'),
    },
  },
  cardDescription: 'Основная линия о поисках Джину и примирении с ним.',
  partCount: mechIShramyParts.length,
  readTarget: mechIShramyPartOne.id,
  childStories: [razgovorZaKulisamiStory, friendsTogetherStory, whenEverythingIsOkayStory, {
    id: 'nedostoiny-special',
    cycle: 'МЕЧ И ШРАМЫ',
    title: 'Недостойный',
    part: 'SPECIAL',
    category: 'special',
    paragraphs: nedostoinyPartOne.paragraphs,
    partCount: nedostoinyParts.length,
    readTarget: nedostoinyPartOne.id,
  }].map((story) => ({
    story,
    readTarget: story.readTarget ?? story.id,
    partCategory: story.category,
    partCount: story.partCount,
  })),
}
const eugeneAndGirlsEntry = {
  id: 'eugene-and-girls',
  story: {
    cycle: 'БОЛЬШОЙ ФИЛЛЕР',
    title: 'Юджин и девчонки',
    part: 'Большой филлер',
    excerpt: 'Юджин приходит к девчонкам, чтобы поговорить и попросить прощения.',
    paragraphs: [],
    coverImage: {
      src: publicAsset('eugene-and-girls-cover.png'),
      href: publicAsset('eugene-and-girls-cover.png'),
    },
  },
  cardDescription: 'Юджин приходит к девчонкам, чтобы поговорить и попросить прощения.',
  partCount: 1,
  partCategory: 'filler',
  readTarget: eugeneAndGirlsPartOne.id,
  childStories: [{
    story: {
      ...eugeneAndGirlsPartOne,
      title: 'Возмездие и извинения',
    },
    readTarget: eugeneAndGirlsPartOne.id,
    partCategory: 'special',
    partCount: eugeneAndGirlsParts.length,
  }],
}
const chejuMainEntry = {
  id: 'cheju-main',
  story: {
    cycle: 'ОСНОВНАЯ ЛИНИЯ',
    title: 'Чеджу',
    part: 'Основная линия',
    excerpt: 'Основная сюжетная линия на острове Чеджу.',
    paragraphs: [],
    coverImage: {
      src: publicAsset('cheju-cover.png'),
      href: publicAsset('cheju-cover.png'),
    },
  },
  cardDescription: 'Основная сюжетная линия на острове Чеджу.',
  partCount: chejuMainParts.length,
  readTarget: chejuMainPartOne.id,
  childStories: [{
    story: {
      ...chejuInterviewPartOne,
      part: 'Филлер · Часть 1',
    },
    readTarget: chejuInterviewPartOne.id,
    partCategory: 'filler',
    partCount: chejuInterviewParts.length,
  }, {
    story: {
      ...chejuKosterPartOne,
      part: 'Филлер · Часть 1',
    },
    readTarget: chejuKosterPartOne.id,
    partCategory: 'filler',
    partCount: chejuKosterParts.length,
  }, {
    story: chejuHeartToHeartStory,
    readTarget: chejuHeartToHeartStory.id,
    partCategory: 'filler',
  }, {
    story: chejuPetalsRossStory,
    readTarget: chejuPetalsRossStory.id,
    partCategory: 'filler',
  }, {
    story: chejuJinuConfessionStory,
    readTarget: chejuJinuConfessionStory.id,
    partCategory: 'filler',
  }, {
    story: chejuBoltlivyiAtCampfireStory,
    readTarget: chejuBoltlivyiAtCampfireStory.id,
    partCategory: 'filler',
  }],
}
const chejuRumiJinuInterviewEntry = {
  id: 'cheju-rumi-jinu-interview',
  story: chejuRumiJinuInterviewPartOne,
  cardDescription: 'Руми и Джину возвращаются на шоу, чтобы ответить на вопросы об отношениях.',
  partCount: chejuRumiJinuInterviewParts.length,
  partCategory: 'filler',
  readTarget: chejuRumiJinuInterviewPartOne.id,
}
const bowlingMainEntry = {
  id: 'bowling-main',
  story: bowlingPartOne,
  cardDescription: 'Основная линия о походе компании в боулинг.',
  partCount: bowlingMainParts.length,
  readTarget: bowlingPartOne.id,
  childStories: [{
    story: bowlingBabyFiller,
    readTarget: bowlingBabyFiller.id,
    partCategory: 'filler',
  }],
}
const publishedStoryEntries = [
  {
    id: 'gangnam-story',
    story: gangnamParts[0],
    cardDescription: 'О том, как Мира стала Мирой.',
    partCount: gangnamParts.length,
    readTarget: gangnamParts[0].id,
  },
  ...storyParts
    .filter((story) =>
      !story.id.startsWith('gangnam-part-') &&
      !story.id.startsWith('grom-v-nebe-hantrix-part-') &&
      !story.id.startsWith('ranenaya-main-part-') &&
      !story.id.startsWith('ranenaya-mira-abby-part-') &&
      !story.id.startsWith('stydlivaya-main-part-') &&
      !story.id.startsWith('mech-i-shramy-part-') &&
      !story.id.startsWith('nedostoiny-part-') &&
      !story.id.startsWith('eugene-and-girls-part-') &&
      !story.id.startsWith('cheju-interview-part-') &&
      !story.id.startsWith('cheju-rumi-jinu-interview-part-') &&
      !story.id.startsWith('bowling-main-part-') &&
      !story.id.startsWith('cheju-main-part-') &&
      !story.id.startsWith('cheju-koster-part-') &&
      story.id !== chejuHeartToHeartStory.id &&
      story.id !== chejuPetalsRossStory.id &&
      story.id !== chejuJinuConfessionStory.id &&
      story.id !== chejuBoltlivyiAtCampfireStory.id &&
      story.id !== bowlingBabyFiller.id &&
      story.id !== stydlivayaFiller.id &&
      story.id !== redThornsStory.id &&
      story.id !== loveStruckGangsterStory.id &&
      story.id !== whoToChooseStory.id &&
      story.id !== razgovorZaKulisamiStory.id &&
      story.id !== bestFriendsStory.id &&
      story.id !== confessionZoeStory.id &&
      story.id !== friendsTogetherStory.id &&
      story.id !== whenEverythingIsOkayStory.id &&
      story.id !== minSuApologyStory.id &&
      story.id !== minSuThornsStory.id &&
      story.id !== mechIShramyPartOne.id &&
      story.id !== firstDateStory.id &&
      story.id !== secondDateStory.id &&
      story.id !== 'mira-side-1',
    )
    .map((story) => ({
      id: story.id,
      story,
      partCount: 1,
      readTarget: story.id,
      partCategory: ['first-date-rumi-jinu', 'second-date-rumi-jinu', minSuAwakeningStory.id].includes(story.id)
        ? 'filler'
        : undefined,
      childStories: story.id === minSuAwakeningStory.id
        ? [{
            story: minSuApologyStory,
            readTarget: minSuApologyStory.id,
            partCategory: 'special',
          }, {
            story: minSuThornsStory,
            readTarget: minSuThornsStory.id,
            partCategory: 'filler',
          }]
        : undefined,
    })),
]
publishedStoryEntries.splice(1, 0, gromPublishedEntry)
publishedStoryEntries.splice(2, 0, ranenayaArcEntry)
publishedStoryEntries.splice(3, 0, stydlivayaArcEntry)
publishedStoryEntries.splice(4, 0, mechIShramyEntry)
publishedStoryEntries.push(eugeneAndGirlsEntry)
publishedStoryEntries.push(chejuMainEntry)
publishedStoryEntries.push(chejuRumiJinuInterviewEntry)
publishedStoryEntries.push(bowlingMainEntry)

const mainStoryline = [
  {
    title: 'РАЙОН ГАНГНАМ 13 YEARS AGO',
    subtitle: '13 YEARS AGO • первая ветка',
    readTarget: 'gangnam-part-1',
    tag: 'филлер',
    listKind: 'filler',
    listLabel: 'Филлер',
  },
  {
    title: '«Гром в небе Хантрикс»',
    subtitle: 'Ссора девчонок',
    readTarget: 'grom-v-nebe-hantrix-part-1',
    tag: 'внешняя ссылка',
  },
  {
    title: '«Раненая охотница и влюблённый демон»',
    subtitle: 'Основная линия • 10 частей',
    readTarget: 'ranenaya-main-part-1',
    tag: 'внешняя ссылка',
  },
  {
    title: '«Стыдливая и Лохматый»',
    subtitle: 'Основная линия • 8 частей',
    readTarget: 'stydlivaya-main-part-1',
    tag: 'основная линия',
  },
  {
    title: '«Меч и Шрамы»',
    subtitle: `Основная линия • ${mechIShramyParts.length} части`,
    readTarget: mechIShramyPartOne.id,
    tag: 'основная линия',
  },
  {
    title: '«Чеджу»',
    subtitle: 'Основная линия',
    readTarget: chejuMainPartOne.id,
    tag: 'основная линия',
  },
  {
    title: '«Интервью Руми и Джину»',
    subtitle: 'Филлер • Часть 1',
    readTarget: chejuRumiJinuInterviewPartOne.id,
    tag: 'филлер',
    listKind: 'filler',
    listLabel: 'Филлер',
  },
  {
    title: '«Боулинг»',
    subtitle: `Основная сюжетная линия • ${bowlingMainParts.length} частей`,
    readTarget: bowlingPartOne.id,
    tag: 'основная линия',
  },
  {
    title: '«Район Гангнам 2»',
    subtitle: 'Филлер после арки Бэйби',
    tag: 'филлер',
    listKind: 'filler',
    listLabel: 'Филлер',
  },
]

const GRAPH_START_Y = 100
const GRAPH_STEP_Y = 160
const GRAPH_CENTER_X = 600
const GRAPH_STEP_X = 280
const GRAPH_NODE_WIDTH = 240
const GRAPH_NODE_HEIGHT = 90
const STORY_GRAPH_WIDTH = 2400
const STORY_GRAPH_HEIGHT = 3800

const initialStoryGraph = [
  {
    id: 'grom_v_nebe',
    label: 'ГРОМ В НЕБЕ ХАНТРИКС',
    description: 'Центральная линия — Старт',
    phase: 1,
    columnOffset: 0,
    variant: 'main',
    children: ['date_1', 'date_2'],
  },
  {
    id: 'date_1',
    label: 'ПЕРВОЕ СВИДАНИЕ',
    description: 'Руми + Джину',
    phase: 2,
    columnOffset: -1,
    variant: 'filler',
    children: ['ranenaya_ohotnica'],
  },
  {
    id: 'date_2',
    label: 'ВТОРОЕ СВИДАНИЕ',
    description: 'Руми + Джину',
    phase: 2,
    columnOffset: 1,
    variant: 'filler',
    children: ['ranenaya_ohotnica'],
  },
  {
    id: 'ranenaya_ohotnica',
    label: 'РАНЕНАЯ ОХОТНИЦА И ВЛЮБЛЁННЫЙ ДЕМОН',
    description: 'Центральная линия — Переломный момент',
    phase: 3,
    columnOffset: 0,
    variant: 'main',
    children: ['razgovor_razdevalka', 'priznanie_zoi', 'razgovor_o_mire'],
  },
  {
    id: 'razgovor_razdevalka',
    label: 'РАЗГОВОР В РАЗДЕВАЛКЕ',
    description: 'Эбби + Джину о Мире и Руми',
    phase: 4,
    columnOffset: -1,
    variant: 'filler',
    children: ['stydlivaya_i_lohmatyi'],
  },
  {
    id: 'priznanie_zoi',
    label: 'ПРИЗНАНИЕ ЗОИ',
    description: 'Руми помогает Зои разобраться в чувствах к Мисти',
    phase: 4,
    columnOffset: 0,
    variant: 'filler',
    children: ['stydlivaya_i_lohmatyi'],
  },
  {
    id: 'razgovor_o_mire',
    label: 'РАЗГОВОР О МИРЕ',
    description: 'Романс + Эбби о Мире',
    phase: 4,
    columnOffset: 1,
    variant: 'filler',
    children: ['stydlivaya_i_lohmatyi'],
  },
  {
    id: 'stydlivaya_i_lohmatyi',
    label: 'СТЫДЛИВАЯ И ЛОХМАТЫЙ',
    description: 'Центральная линия — 8 частей • Комедия и уют',
    phase: 5,
    columnOffset: 0,
    variant: 'main',
    children: ['ssora_rumi_jinu'],
  },
  {
    id: 'ssora_rumi_jinu',
    label: 'ССОРА РУМИ И ДЖИНУ',
    description: 'Центральная линия — Конфликт',
    phase: 6,
    columnOffset: 0,
    variant: 'main',
    children: ['razgovor_za_kulisami', 'pohod_vrata_ada'],
  },
  {
    id: 'razgovor_za_kulisami',
    label: 'РАЗГОВОР ЗА КУЛИСАМИ',
    description: 'Ветка А — Размышления',
    phase: 7,
    columnOffset: -1,
    variant: 'branch',
    children: ['mech_i_shramy'],
  },
  {
    id: 'pohod_vrata_ada',
    label: 'ПОХОД РУМИ К ВРАТАМ АДА',
    description: 'Ветка Б — Опасная разведка',
    phase: 7,
    columnOffset: 1,
    variant: 'branch',
    children: ['mech_i_shramy'],
  },
  {
    id: 'mech_i_shramy',
    label: 'МЕЧ И ШРАМЫ',
    description: `Основная линия — ${mechIShramyParts.length} части • Поиски Джину и примирение`,
    phase: 8,
    columnOffset: 0,
    variant: 'main',
    children: ['primirenie_yujin', 'minsu_awakening'],
  },
  {
    id: 'minsu_awakening',
    label: 'ПРОБУЖДЕНИЕ МИН-СУ',
    description: 'Романс вспоминает прошлое и противостоит Гви-ма',
    phase: 9,
    columnOffset: 1,
    variant: 'filler',
  },
  {
    id: 'primirenie_yujin',
    label: 'ПРИМИРЕНИЕ С ЮДЖИНОМ',
    description: 'Центральная линия — Одобрение',
    phase: 9,
    columnOffset: 0,
    variant: 'main',
    children: ['depression_jinu'],
  },
  {
    id: 'depression_jinu',
    label: 'ДЕПРЕССИЯ ДЖИНУ',
    description: 'Душевный кризис',
    phase: 10,
    columnOffset: 0,
    variant: 'filler',
    children: ['event_reshenie_zadach', 'event_rumi_zadachi'],
  },
  {
    id: 'event_reshenie_zadach',
    label: 'РЕШЕНИЕ ЗАДАЧ',
    description: 'Командная работа',
    phase: 11,
    columnOffset: -1,
    variant: 'event',
    children: ['izvinenie_takedown'],
  },
  {
    id: 'event_rumi_zadachi',
    label: 'РУМИ ДАЁТ ЗАДАЧИ',
    description: 'Лидерский ивент',
    phase: 11,
    columnOffset: 1,
    variant: 'event',
    children: ['izvinenie_takedown'],
  },
  {
    id: 'izvinenie_takedown',
    label: 'ИЗВИНЕНИЕ ЗА «ТЕЙКДАУН»',
    description: 'Музыкальный трек и объяснение',
    phase: 12,
    columnOffset: 0,
    variant: 'filler',
    children: ['romance_cheju'],
  },
  {
    id: 'romance_cheju',
    label: 'ЧЕДЖУ',
    description: 'Основная линия на острове Чеджу',
    phase: 13,
    columnOffset: 0,
    variant: 'main',
    children: ['cheju_interview', 'cheju_koster', 'cheju_dialog_jinu', 'cheju_mira_abby'],
  },
  {
    id: 'cheju_interview',
    label: 'ПАРОЧКА НА ИНТЕРВЬЮ',
    description: 'Руми и Джину отвечают на вопросы об отношениях',
    phase: 14,
    columnOffset: 2.4,
    variant: 'filler',
  },
  {
    id: 'cheju_koster',
    label: 'У КОСТРА',
    description: 'Игры + Шашлыки',
    phase: 14,
    columnOffset: -1.2,
    variant: 'filler',
    children: ['big_filler_interview', 'cheju_koster_boltlivyi'],
  },
  {
    id: 'cheju_koster_boltlivyi',
    label: 'БОЛТЛИВЫЙ У КОСТРА',
    description: 'Бэйби рассказывает о своём сне',
    phase: 15,
    columnOffset: -1.2,
    variant: 'filler',
  },
  {
    id: 'cheju_dialog_jinu',
    label: 'ДИАЛОГ РУМИ + ДЖИНУ',
    description: 'Уединённая прогулка',
    phase: 14,
    columnOffset: 0,
    variant: 'filler',
    children: ['big_filler_interview'],
  },
  {
    id: 'cheju_mira_abby',
    label: 'МИРА + ЭББИ',
    description: 'Разговор у бассейна',
    phase: 14,
    columnOffset: 1.2,
    variant: 'filler',
    children: ['big_filler_interview'],
  },
  {
    id: 'big_filler_interview',
    label: 'ИНТЕРВЬЮ',
    description: 'Интервью Руми и Джину',
    phase: 15,
    columnOffset: 0,
    variant: 'filler',
    children: ['bowling_baby'],
  },
  {
    id: 'bowling_baby',
    label: 'БОУЛИНГ И ДЕВУШКИ БЭЙБИ',
    description: 'Знакомство с младшими',
    phase: 16,
    columnOffset: 0,
    variant: 'event',
    children: ['beseda_yujin'],
  },
  {
    id: 'beseda_yujin',
    label: 'БЕСЕДА РУМИ И ЮДЖИНА',
    description: 'Стратегия на будущее',
    phase: 17,
    columnOffset: 0,
    variant: 'filler',
    children: ['interview_romance'],
  },
  {
    id: 'interview_romance',
    label: 'ИНТЕРВЬЮ РОМАНСА',
    description: 'Сольный выпуск Романса',
    phase: 18,
    columnOffset: 0,
    variant: 'filler',
    children: ['mira_little_2'],
  },
  {
    id: 'mira_little_2',
    label: 'МАЛЕНЬКАЯ МИРА 2',
    description: 'Прошлое Миры',
    phase: 19,
    columnOffset: 0,
    variant: 'filler',
    children: ['rayon_gangnam'],
  },
  {
    id: 'rayon_gangnam',
    label: '«РАЙОН ГАНГНАМ»',
    description: 'Специальный эпизод',
    phase: 20,
    columnOffset: 0,
    variant: 'filler',
    children: ['arka_baby_yorin'],
  },
  {
    id: 'arka_baby_yorin',
    label: 'АРКА БЭЙБИ И ЙОРИН',
    description: 'Кульминация — Новая эпоха',
    phase: 21,
    columnOffset: 0,
    variant: 'arc',
    children: ['gangnam-2'],
  },
  {
    id: 'gangnam-2',
    label: '«РАЙОН ГАНГНАМ 2»',
    description: 'Филлер после арки Бэйби',
    phase: 22,
    columnOffset: 0,
    variant: 'filler',
  },
]

const GRAPH_CHARACTERS = {
  rumi: { name: 'Руми', initials: 'РМ', color: '#a855f7' },
  zoe: { name: 'Зои', initials: 'ЗО', color: '#ec4899' },
  jinu: { name: 'Джину', initials: 'ДЖ', color: '#f43f5e' },
  abby: { name: 'Эбби', initials: 'ЭБ', color: '#06b6d4' },
  mira: { name: 'Мира', initials: 'МР', color: '#10b981' },
  romance: { name: 'Романс', initials: 'РМ', color: '#f59e0b' },
  yujin: { name: 'Юджин', initials: 'ЮД', color: '#3b82f6' },
  baby: { name: 'Бэйби', initials: 'ББ', color: '#ec4899' },
  yorin: { name: 'Йорин', initials: 'ЙР', color: '#8b5cf6' },
}

const GRAPH_NODE_CHARACTERS = {
  grom_v_nebe: ['rumi', 'jinu'],
  date_1: ['rumi', 'jinu'],
  date_2: ['rumi', 'jinu'],
  ranenaya_ohotnica: ['rumi', 'jinu', 'mira', 'abby'],
  priznanie_zoi: ['rumi', 'zoe'],
  razgovor_razdevalka: ['abby', 'jinu', 'mira', 'rumi'],
  razgovor_o_mire: ['romance', 'abby', 'mira'],
  stydlivaya_i_lohmatyi: ['rumi', 'jinu'],
  ssora_rumi_jinu: ['rumi', 'jinu'],
  razgovor_za_kulisami: ['rumi', 'abby'],
  pohod_vrata_ada: ['rumi'],
  mech_i_shramy: ['rumi', 'jinu'],
  minsu_awakening: ['romance'],
  primirenie_yujin: ['rumi', 'yujin', 'jinu'],
  depression_jinu: ['jinu', 'rumi', 'abby'],
  event_reshenie_zadach: ['rumi', 'jinu', 'abby', 'mira'],
  event_rumi_zadachi: ['rumi', 'jinu', 'mira'],
  izvinenie_takedown: ['rumi', 'jinu', 'mira', 'abby'],
  romance_cheju: ['rumi', 'jinu', 'abby', 'mira', 'romance'],
  cheju_interview: ['rumi', 'jinu'],
  cheju_koster: ['rumi', 'jinu', 'abby', 'mira', 'romance'],
  cheju_koster_boltlivyi: ['baby', 'jinu', 'romance', 'zoe'],
  cheju_dialog_jinu: ['rumi', 'jinu'],
  cheju_mira_abby: ['mira', 'abby'],
  big_filler_interview: ['rumi', 'jinu'],
  bowling_baby: ['rumi', 'abby', 'mira', 'baby'],
  beseda_yujin: ['rumi', 'yujin'],
  interview_romance: ['romance'],
  mira_little_2: ['mira'],
  rayon_gangnam: ['mira', 'rumi'],
  arka_baby_yorin: ['baby', 'yorin', 'rumi', 'jinu', 'mira', 'abby'],
  'gangnam-2': ['mira', 'rumi'],
}

const GRAPH_NODE_TYPE_LABELS = {
  main: 'сюжет',
  romance: 'романс',
  event: 'ивент',
  filler: 'филлер',
  branch: 'ветка',
  arc: 'арка',
}

const GRAPH_STORY_TARGETS = {
  grom_v_nebe: {
    readTarget: 'grom-v-nebe-hantrix-part-1',
  },
  date_1: {
    readTarget: 'first-date-rumi-jinu',
  },
  date_2: {
    readTarget: 'second-date-rumi-jinu',
  },
  ranenaya_ohotnica: {
    readTarget: 'ranenaya-main-part-1',
  },
  priznanie_zoi: {
    readTarget: 'confession-zoe-ranenaya',
  },
  stydlivaya_i_lohmatyi: {
    readTarget: 'stydlivaya-main-part-1',
  },
  razgovor_za_kulisami: {
    href: 'https://boosty.to/eugeneuvarov/posts/1c58c0f3-a840-4068-9eee-ddc47a6ce2ad?share=success_publish_link',
  },
  mech_i_shramy: {
    readTarget: mechIShramyPartOne.id,
  },
  minsu_awakening: {
    readTarget: minSuAwakeningStory.id,
  },
  romance_cheju: {
    readTarget: chejuMainPartOne.id,
  },
  cheju_interview: {
    readTarget: chejuInterviewPartOne.id,
  },
  cheju_koster: {
    readTarget: chejuKosterPartOne.id,
  },
  cheju_koster_boltlivyi: {
    readTarget: chejuBoltlivyiAtCampfireStory.id,
  },
  bowling_baby: {
    readTarget: bowlingPartOne.id,
  },
  cheju_dialog_jinu: {
    readTarget: chejuJinuConfessionStory.id,
  },
}

function buildConnectionPath(fromNode, toNode) {
  const from = getGraphNodePosition(fromNode)
  const to = getGraphNodePosition(toNode)
  const startX = from.x + from.width / 2
  const startY = from.y + from.height
  const endX = to.x + to.width / 2
  const endY = to.y
  const curveY = (startY + endY) / 2

  return `M ${startX} ${startY} C ${startX} ${curveY}, ${endX} ${curveY}, ${endX} ${endY}`
}

function getGraphNodePosition(node) {
  return {
    x: GRAPH_CENTER_X + (node.columnOffset ?? 0) * GRAPH_STEP_X - GRAPH_NODE_WIDTH / 2,
    y: GRAPH_START_Y + (node.phase - 1) * GRAPH_STEP_Y - GRAPH_NODE_HEIGHT / 2,
    width: GRAPH_NODE_WIDTH,
    height: GRAPH_NODE_HEIGHT,
  }
}

export default function App() {
  const [reading, setReading] = useState(false)
  const [graphView, setGraphView] = useState('list')
  const [expandedStoryId, setExpandedStoryId] = useState(null)
  const [activePartId, setActivePartId] = useState('gangnam-part-1')
  const [expandedTranslations, setExpandedTranslations] = useState({})
  const [selectedGraphNodeId, setSelectedGraphNodeId] = useState('grom_v_nebe')
  const [hoveredGraphNodeId, setHoveredGraphNodeId] = useState(null)
  const graphNodes = initialStoryGraph
  const [graphZoom, setGraphZoom] = useState(0.65)
  const [graphPan, setGraphPan] = useState({ x: 0, y: 0 })
  const [isGraphPanning, setIsGraphPanning] = useState(false)
  const graphPanStartRef = useRef(null)
  const graphRef = useRef(null)
  const readerHeadingRef = useRef(null)

  const activePart = useMemo(
    () => storyParts.find((story) => story.id === activePartId) ?? storyParts[0],
    [activePartId],
  )
  const expandedStory = publishedStoryEntries.find((entry) => entry.id === expandedStoryId)

  const selectedGraphNode =
    graphNodes.find((node) => node.id === selectedGraphNodeId) ?? graphNodes[0]
  const graphConnections = graphNodes.flatMap((node) =>
    (node.children ?? []).map((childId) => ({ from: node.id, to: childId })),
  )

  const graphCanvasWidth = STORY_GRAPH_WIDTH
  const graphCanvasHeight = STORY_GRAPH_HEIGHT

  const readingParts = activePart.id.startsWith('gangnam-part-')
    ? gangnamParts
    : activePart.id.startsWith('bowling-main-part-')
      ? bowlingMainParts
    : activePart.id.startsWith('grom-v-nebe-hantrix-part-')
      ? gromParts
      : activePart.id.startsWith('cheju-main-part-')
        ? chejuMainParts
        : activePart.id.startsWith('cheju-interview-part-')
          ? chejuInterviewParts
          : activePart.id.startsWith('cheju-rumi-jinu-interview-part-')
            ? chejuRumiJinuInterviewParts
            : activePart.id.startsWith('cheju-koster-part-')
            ? chejuKosterParts
        : activePart.id.startsWith('ranenaya-main-part-')
          ? ranenayaMainParts
          : activePart.id.startsWith('stydlivaya-main-part-')
            ? stydlivayaMainParts
            : activePart.id.startsWith('mech-i-shramy-part-')
              ? mechIShramyParts
              : activePart.id.startsWith('nedostoiny-part-')
                ? nedostoinyParts
                          : activePart.id.startsWith('eugene-and-girls-part-')
                            ? eugeneAndGirlsParts
                : [activePart]
  const isNumberedStory = activePart.id.startsWith('gangnam-part-') ||
    activePart.id.startsWith('bowling-main-part-') ||
    activePart.id.startsWith('grom-v-nebe-hantrix-part-') ||
      activePart.id.startsWith('ranenaya-main-part-') ||
      activePart.id.startsWith('stydlivaya-main-part-') ||
      activePart.id.startsWith('mech-i-shramy-part-')
      || activePart.id.startsWith('nedostoiny-part-')
      || activePart.id.startsWith('eugene-and-girls-part-')
      || activePart.id.startsWith('cheju-main-part-')
      || activePart.id.startsWith('cheju-interview-part-')
      || activePart.id.startsWith('cheju-rumi-jinu-interview-part-')
      || activePart.id.startsWith('cheju-koster-part-')
  const partIndex = Math.max(0, readingParts.findIndex((story) => story.id === activePartId))
  const previousPart = readingParts[partIndex - 1] ?? null
  const nextPart = readingParts[partIndex + 1] ?? null

  const openPart = (partId) => {
    setActivePartId(partId)
    setReading(true)
  }

  const openGraphStory = (node) => {
    setSelectedGraphNodeId(node.id)
    const target = GRAPH_STORY_TARGETS[node.id]

    if (target?.readTarget) {
      openPart(target.readTarget)
    } else if (target?.href) {
      window.open(target.href, '_blank', 'noopener,noreferrer')
    }
  }

  const startGraphPan = (event) => {
    if (event.button !== 0 || event.target.closest('.graph-node, .graph-canvas-controls')) return

    graphPanStartRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      panX: graphPan.x,
      panY: graphPan.y,
    }
    setIsGraphPanning(true)
    event.preventDefault()
  }

  const fitGraphToView = () => {
    const viewportWidth = graphRef.current?.clientWidth ?? 900
    const viewportHeight = graphRef.current?.clientHeight ?? 560
    const bounds = graphNodes.reduce(
      (current, node) => {
        const position = getGraphNodePosition(node)
        return {
          left: Math.min(current.left, position.x),
          top: Math.min(current.top, position.y),
          right: Math.max(current.right, position.x + position.width),
          bottom: Math.max(current.bottom, position.y + position.height),
        }
      },
      { left: Infinity, top: Infinity, right: -Infinity, bottom: -Infinity },
    )
    const contentWidth = bounds.right - bounds.left
    const contentHeight = bounds.bottom - bounds.top
    const nextZoom = Math.min(
      1,
      Math.max(0.1, Math.min((viewportWidth - 48) / contentWidth, (viewportHeight - 48) / contentHeight)),
    )
    setGraphZoom(nextZoom)
    setGraphPan({
      x: (viewportWidth - contentWidth * nextZoom) / 2 - bounds.left * nextZoom,
      y: (viewportHeight - contentHeight * nextZoom) / 2 - bounds.top * nextZoom,
    })
  }

  useLayoutEffect(() => {
    if (!graphRef.current) return

    const viewportWidth = graphRef.current.clientWidth
    const viewportHeight = graphRef.current.clientHeight
    const bounds = initialStoryGraph.reduce(
      (current, node) => {
        const position = getGraphNodePosition(node)
        return {
          left: Math.min(current.left, position.x),
          top: Math.min(current.top, position.y),
          right: Math.max(current.right, position.x + position.width),
          bottom: Math.max(current.bottom, position.y + position.height),
        }
      },
      { left: Infinity, top: Infinity, right: -Infinity, bottom: -Infinity },
    )
    const contentWidth = bounds.right - bounds.left
    const contentHeight = bounds.bottom - bounds.top
    const initialZoom = Math.min(
      1,
      Math.max(0.1, Math.min((viewportWidth - 48) / contentWidth, (viewportHeight - 48) / contentHeight)),
    )

    setGraphZoom(initialZoom)
    setGraphPan({
      x: (viewportWidth - contentWidth * initialZoom) / 2 - bounds.left * initialZoom,
      y: (viewportHeight - contentHeight * initialZoom) / 2 - bounds.top * initialZoom,
    })
  }, [])

  useLayoutEffect(() => {
    if (!reading) return undefined

    const frame = window.requestAnimationFrame(() => {
      readerHeadingRef.current?.focus({ preventScroll: true })
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [reading, activePartId])

  useEffect(() => {
    const finishPanning = (event) => {
      if (
        graphPanStartRef.current &&
        (event.type === 'blur' || event.pointerId === graphPanStartRef.current.pointerId)
      ) {
        graphPanStartRef.current = null
        setIsGraphPanning(false)
      }
    }

    const handlePointerMove = (event) => {
      const drag = graphPanStartRef.current
      if (!drag || event.pointerId !== drag.pointerId) return

      setGraphPan({
        x: drag.panX + event.clientX - drag.startX,
        y: drag.panY + event.clientY - drag.startY,
      })
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', finishPanning)
    window.addEventListener('pointercancel', finishPanning)
    window.addEventListener('blur', finishPanning)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', finishPanning)
      window.removeEventListener('pointercancel', finishPanning)
      window.removeEventListener('blur', finishPanning)
    }
  }, [])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    document.documentElement.classList.add('has-scroll-reveal')
    document.querySelectorAll('.scroll-reveal').forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('has-scroll-reveal')
    }
  }, [reading])

  useEffect(() => {
    if (!reading || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const paragraphs = document.querySelectorAll('.chapter-text p')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    )

    document.documentElement.classList.add('has-chapter-reveal')
    paragraphs.forEach((paragraph) => observer.observe(paragraph))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('has-chapter-reveal')
    }
  }, [reading, activePartId])

  if (reading) {
    return (
      <div className="page-shell reader-shell">
        <header className="reader-topbar">
          <button type="button" className="back-button" onClick={() => setReading(false)}>
            ← К историям
          </button>
          <span>Fandom Tales</span>
        </header>
        <main className="reader-page">
          <div className="reader-heading">
            <p className="eyebrow">{activePart.cycle}</p>
            <h1 ref={readerHeadingRef} tabIndex={-1}>{activePart.title}</h1>
            <span className="reader-part">{activePart.part}</span>
            {activePart.category === 'filler' && (
              <span className="published-story-badge">Филлер</span>
            )}
            <div className="reader-meta">
              Часть {partIndex + 1}
              <span>•</span>
              Русский и корейский
            </div>
          </div>

          {isNumberedStory && (
            <nav className="chapter-part-nav" aria-label="Части истории">
              {readingParts.map((part, index) => (
                <button
                  type="button"
                  key={part.id}
                  aria-current={part.id === activePartId ? 'page' : undefined}
                  onClick={() => openPart(part.id)}
                >
                  {index + 1}
                </button>
              ))}
              <span>из {readingParts.length}</span>
            </nav>
          )}

          {activePart.coverImage && (
            <a
              className="chapter-cover-link"
              href={activePart.coverImage.href}
              target="_blank"
              rel="noreferrer"
              aria-label="Открыть изображение истории"
            >
              <img src={activePart.coverImage.src} alt={`Иллюстрация к истории «${activePart.title}»`} loading="lazy" decoding="async" />
            </a>
          )}

          <article className="chapter-text chapter-transition" key={activePart.id}>
            {activePart.paragraphs.map((paragraph, index) => {
              if (typeof paragraph === 'string') {
                const translationPattern = /(\[\[ko:[^|\]]+\|[^|\]]+(?:\|[^\]]+)?\]\])/g
                const segments = paragraph.split(translationPattern)

                return (
                  <p key={`${activePart.id}-${index}`}>
                    {segments.map((segment, segmentIndex) => {
                      const match = segment.match(/^\[\[ko:([^|\]]+)\|([^\]]+)\]\]$/)
                      if (!match) return segment

                      const translationKey = `${activePart.id}-${index}-${segmentIndex}`
                      const isTranslationExpanded = expandedTranslations[translationKey] ?? false

                      return (
                        <span key={translationKey}>
                          <button
                            type="button"
                            className="chapter-translation-toggle"
                            lang="ko"
                            aria-label={`Показать перевод с корейского: ${match[1]}`}
                            aria-expanded={isTranslationExpanded}
                            onClick={() => setExpandedTranslations((current) => ({
                              ...current,
                              [translationKey]: !current[translationKey],
                            }))}
                          >
                            {match[1]}
                          </button>
                          {isTranslationExpanded && (
                            <span className="chapter-translation" lang="ru">{match[2]}</span>
                          )}
                        </span>
                      )
                    })}
                  </p>
                )
              }

              if (paragraph.type === 'translation') {
                const translationKey = `${activePart.id}-${index}`
                const isTranslationExpanded = expandedTranslations[translationKey] ?? false

                return (
                  <p key={translationKey}>
                    <button
                      type="button"
                      className="chapter-translation-toggle"
                      lang="it"
                      aria-expanded={isTranslationExpanded}
                      onClick={() => setExpandedTranslations((current) => ({
                        ...current,
                        [translationKey]: !current[translationKey],
                      }))}
                    >
                      {paragraph.value}
                    </button>
                    {isTranslationExpanded && (
                      <span className="chapter-translation" lang="ru">{paragraph.translation}</span>
                    )}
                  </p>
                )
              }

              return <p key={`${activePart.id}-${index}`}>{paragraph.value}</p>
            })}
          </article>

          <div className="reader-end">
            <button
              type="button"
              className="reader-part-button"
              disabled={!previousPart}
              onClick={() => previousPart && openPart(previousPart.id)}
            >
              ← Назад
            </button>
            <span>{nextPart ? 'На очереди следующая часть' : 'Конец истории'}</span>
            {nextPart ? (
              <button type="button" className="primary-button" onClick={() => openPart(nextPart.id)}>
                Далее →
              </button>
            ) : (
              <button type="button" className="primary-button" onClick={() => setReading(false)}>
                К историям
              </button>
            )}
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">F</span>
          <span>Fandom Tales</span>
        </div>
        <nav className="nav" aria-label="Главная навигация">
          <a href="#story-map">Карта сюжета</a>
        </nav>
      </header>

      <main className="home-main">
        <section className="story-map" id="story-map">
          <div className="section-head">
            <div>
              <p className="eyebrow">Путеводитель по сюжету</p>
              <h2>Истории и их связи</h2>
              <p className="map-intro">
                Список историй открыт сразу. Выберите граф, чтобы посмотреть, как события связаны между собой.
              </p>
            </div>
            <span className="map-count">
              {graphView === 'list' ? `${mainStoryline.length} историй в списке` : `${graphNodes.length} узлов на карте`}
            </span>
          </div>

          <div className="graph-workspace-header">
            <div className="graph-workspace-brand">
              <span className="graph-workspace-mark">✦</span>
              <div>
                <strong>ОХОТНИЦЫ</strong>
                <span>Интерактивная карта сюжета</span>
              </div>
            </div>
            <div className="graph-workspace-tabs" role="group" aria-label="Вид историй">
              <button
                type="button"
                className={`graph-workspace-tab ${graphView === 'graph' ? 'is-active' : ''}`}
                aria-pressed={graphView === 'graph'}
                onClick={() => setGraphView('graph')}
              >
                Граф
              </button>
              <button
                type="button"
                className={`graph-workspace-tab ${graphView === 'list' ? 'is-active' : ''}`}
                aria-pressed={graphView === 'list'}
                onClick={() => setGraphView('list')}
              >
                Список
              </button>
            </div>
          </div>

          {graphView === 'graph' ? (
            <>
          <div
            ref={graphRef}
            className={`story-graph ${isGraphPanning ? 'is-panning' : ''}`}
            aria-label="Граф связей историй"
            onPointerDown={startGraphPan}
            onWheel={(event) => {
              if (!event.ctrlKey && !event.metaKey) return
              event.preventDefault()
              setGraphZoom((zoom) => Math.min(1.5, Math.max(0.15, zoom + (event.deltaY < 0 ? 0.06 : -0.06))))
            }}
          >
            <div className="graph-canvas-controls" aria-label="Масштаб графа">
              <button
                type="button"
                className="graph-canvas-control"
                aria-label="Приблизить"
                onClick={() => setGraphZoom((zoom) => Math.min(1.5, Number((zoom + 0.1).toFixed(2))))}
              >
                +
              </button>
              <button
                type="button"
                className="graph-canvas-control"
                aria-label="Отдалить"
                onClick={() => setGraphZoom((zoom) => Math.max(0.15, Number((zoom - 0.1).toFixed(2))))}
              >
                −
              </button>
              <span>{Math.round(graphZoom * 100)}%</span>
              <button type="button" className="graph-canvas-fit" onClick={fitGraphToView}>
                Вписать всё
              </button>
            </div>
            <div className="graph-canvas-legend" aria-label="Типы узлов">
              {Object.entries(GRAPH_NODE_TYPE_LABELS).map(([type, label]) => (
                <span key={type}>
                  <i className={`graph-legend-dot graph-legend-${type}`} />
                  {label}
                </span>
              ))}
            </div>
            <div
              className="graph-stage"
              style={{
                width: graphCanvasWidth,
                height: graphCanvasHeight,
                transform: `translate(${graphPan.x}px, ${graphPan.y}px) scale(${graphZoom})`,
              }}
            >
              <svg
                className="graph-svg"
                viewBox={`0 0 ${graphCanvasWidth} ${graphCanvasHeight}`}
                width={graphCanvasWidth}
                height={graphCanvasHeight}
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="graph-connection-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="graph-active-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#c084fc" stopOpacity="0.9" />
                  </linearGradient>
                  <marker id="graph-connection-arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                    <path d="M 0 0 L 9 5 L 0 10 z" fill="#c084fc" />
                  </marker>
                </defs>

                {graphConnections.map((connection) => {
                  const fromNode = graphNodes.find((node) => node.id === connection.from)
                  const toNode = graphNodes.find((node) => node.id === connection.to)

                  if (!fromNode || !toNode) return null

                  const isHighlighted =
                    hoveredGraphNodeId === connection.from ||
                    hoveredGraphNodeId === connection.to ||
                    selectedGraphNodeId === connection.from ||
                    selectedGraphNodeId === connection.to
                  const path = buildConnectionPath(fromNode, toNode)

                  return (
                    <g key={`${connection.from}-${connection.to}`}>
                      <path
                        d={path}
                        fill="none"
                        stroke={isHighlighted ? 'rgba(236, 72, 153, 0.48)' : 'rgba(51, 65, 85, 0.5)'}
                        strokeWidth={isHighlighted ? 7 : 4}
                        className="graph-path-glow"
                      />
                      <path
                        d={path}
                        data-connection={`${connection.from}->${connection.to}`}
                        className="graph-path"
                        stroke={isHighlighted ? 'url(#graph-active-gradient)' : 'url(#graph-connection-gradient)'}
                        strokeWidth={isHighlighted ? 3 : 2}
                        strokeDasharray={isHighlighted ? undefined : '6 6'}
                        markerEnd="url(#graph-connection-arrow)"
                      />
                    </g>
                  )
                })}
              </svg>

              {graphNodes.map((node) => {
                const characterIds = GRAPH_NODE_CHARACTERS[node.id] ?? []

                return (
                  <button
                    type="button"
                    key={node.id}
                    className={`graph-node graph-node-${node.variant} ${selectedGraphNodeId === node.id ? 'is-selected' : ''}`}
                    style={{
                      left: getGraphNodePosition(node).x,
                      top: getGraphNodePosition(node).y,
                      width: GRAPH_NODE_WIDTH,
                      height: GRAPH_NODE_HEIGHT,
                    }}
                    onClick={() => openGraphStory(node)}
                    onMouseEnter={() => setHoveredGraphNodeId(node.id)}
                    onMouseLeave={() => setHoveredGraphNodeId(null)}
                  >
                    <span className="graph-node-header">
                      <span className="graph-node-type">
                        <i className="graph-node-type-mark" />
                        {GRAPH_NODE_TYPE_LABELS[node.variant] ?? 'узел'}
                      </span>
                    </span>
                    <strong className="graph-node-title">{node.label}</strong>
                    <span className="graph-node-footer">
                      <span className="graph-node-avatars">
                        {characterIds.map((characterId) => {
                          const character = GRAPH_CHARACTERS[characterId]
                          if (!character) return null

                          return (
                            <span
                              className="graph-node-avatar"
                              key={characterId}
                              title={character.name}
                              style={{ '--character-color': character.color }}
                            >
                              {character.initials}
                            </span>
                          )
                        })}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
            <div className="graph-canvas-hint">
              Перетаскивайте свободное место графа мышью; отпустите кнопку, чтобы остановить
            </div>
          </div>

          <div className="graph-selected-card">
            <p className="eyebrow">История</p>
            <h3>{selectedGraphNode.label}</h3>
            <p>{selectedGraphNode.description}</p>

            <div className="graph-card-meta">
              {GRAPH_STORY_TARGETS[selectedGraphNode.id]?.href ||
              GRAPH_STORY_TARGETS[selectedGraphNode.id]?.readTarget ? (
                <span>История опубликована и откроется при выборе узла</span>
              ) : (
                <span>Для этого узла пока нет отдельной опубликованной истории</span>
              )}
              {GRAPH_STORY_TARGETS[selectedGraphNode.id]?.href && (
                <a
                  className="graph-open-story"
                  href={GRAPH_STORY_TARGETS[selectedGraphNode.id].href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Открыть историю ↗
                </a>
              )}
              {GRAPH_STORY_TARGETS[selectedGraphNode.id]?.readTarget && (
                <button
                  type="button"
                  className="graph-open-story"
                  onClick={() => openPart(GRAPH_STORY_TARGETS[selectedGraphNode.id].readTarget)}
                >
                  Читать на сайте
                </button>
              )}
            </div>
          </div>
            </>
          ) : (
            <>
            <div className="story-list-legend" aria-label="Обозначения списка">
              <span><i className="story-list-legend-filler" />Филлеры</span>
            </div>
            <div className="story-list-view" aria-label="Истории по порядку">
              {mainStoryline.map((story, index) => {
                return (
                  <article className={`story-list-item ${story.listKind === 'filler' ? 'story-list-item-filler' : ''}`} key={story.title}>
                    <span className="story-list-number">{String(index + 1).padStart(2, '0')}</span>
                    <div className="story-list-copy">
                      {story.listKind === 'filler' && (
                        <span className="story-list-badge story-list-badge-filler">{story.listLabel}</span>
                      )}
                      <h3>{story.title}</h3>
                      <p>{story.subtitle}</p>
                    </div>
                    <div className="story-list-action">
                      {story.href ? (
                        <a href={story.href} target="_blank" rel="noreferrer">
                            Читать ↗
                        </a>
                      ) : story.readTarget ? (
                        <button type="button" onClick={() => openPart(story.readTarget)}>
                            Читать
                        </button>
                      ) : (
                        <span>История пока не добавлена</span>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>

            <section className="published-stories" aria-labelledby="published-stories-title">
              <div className="published-stories-heading">
                <p className="eyebrow">Читать на сайте</p>
                <h3 id="published-stories-title">Истории целиком</h3>
              </div>
              <div className="published-story-grid">
                {publishedStoryEntries.map(({ id, story, cardDescription, partCount, partCategory }, index) => (
                  <button
                    type="button"
                    className={`published-story-card ${expandedStoryId === id ? 'is-selected' : ''}`}
                    key={id}
                    aria-expanded={expandedStoryId === id}
                    onClick={() => setExpandedStoryId((currentId) => currentId === id ? null : id)}
                  >
                    <div className={`published-story-art ${story.coverImage || id === 'gangnam-story' ? 'has-cover' : ''}`}>
                      {story.coverImage ? (
                        <img src={story.coverImage.src} alt="" loading="lazy" />
                      ) : id === 'gangnam-story' ? (
                        <img src={publicAsset('gangnam-cover.png')} alt="" loading="lazy" />
                      ) : (
                        <span className="published-story-index">{String(index + 1).padStart(2, '0')}</span>
                      )}
                      <span className={`published-story-part ${partCategory === 'filler' ? 'is-filler' : ''}`}>
                        {partCategory === 'filler'
                          ? 'Филлер'
                          : partCategory === 'special'
                            ? 'SPECIAL'
                          : partCount > 1
                            ? `${partCount} частей`
                            : story.part}
                      </span>
                    </div>
                    <div className="published-story-content">
                      <p className="published-story-cycle">{story.cycle}</p>
                      <h4>{story.title}</h4>
                      <p className="published-story-excerpt">{cardDescription ?? story.excerpt ?? story.paragraphs[0]}</p>
                      <span className="published-story-open">Открыть историю <span aria-hidden="true">↗</span></span>
                    </div>
                  </button>
                ))}
              </div>
              {expandedStory && (
                <article className="published-story-detail" aria-labelledby="published-story-detail-title">
                  <button
                    type="button"
                    className="published-story-detail-close"
                    aria-label="Закрыть описание истории"
                    onClick={() => setExpandedStoryId(null)}
                  >
                    ×
                  </button>
                  <div className={`published-story-detail-art ${expandedStory.story.coverImage || expandedStory.id === 'gangnam-story' ? 'has-cover' : ''}`}>
                    {expandedStory.story.coverImage ? (
                      <img src={expandedStory.story.coverImage.src} alt="" />
                    ) : expandedStory.id === 'gangnam-story' ? (
                      <img src={publicAsset('gangnam-cover.png')} alt="" />
                    ) : (
                      <span className="published-story-detail-index">
                        {String(publishedStoryEntries.indexOf(expandedStory) + 1).padStart(2, '0')}
                      </span>
                    )}
                    <span className={expandedStory.partCategory === 'filler' ? 'is-filler' : undefined}>
                      {expandedStory.partCategory === 'filler'
                        ? 'Филлер'
                        : expandedStory.partCategory === 'special'
                          ? 'SPECIAL'
                        : expandedStory.partCount > 1
                          ? `${expandedStory.partCount} частей`
                          : expandedStory.story.part}
                    </span>
                  </div>
                  <div className="published-story-detail-copy">
                    <p className="eyebrow">{expandedStory.story.cycle}</p>
                    <h3 id="published-story-detail-title">{expandedStory.story.title}</h3>
                    <p>{expandedStory.cardDescription ?? expandedStory.story.excerpt ?? expandedStory.story.paragraphs[0]}</p>
                    {expandedStory.childStories?.length > 0 && (
                      <div className="published-story-children" aria-label="Дополнительные истории этой арки">
                        <p className="eyebrow">Дополнительные истории</p>
                        {expandedStory.childStories.map(({ story: childStory, readTarget, partCategory, partCount }) => (
                          <button
                            type="button"
                            className="published-story-child"
                            key={childStory.id}
                            onClick={() => openPart(readTarget)}
                          >
                            <span>
                              {childStory.title}
                              {partCategory === 'filler' && <small>Филлер</small>}
                              {partCategory === 'special' && (
                                <small>{partCount > 1 ? `SPECIAL · ${partCount} части` : 'SPECIAL'}</small>
                              )}
                            </span>
                            <span aria-hidden="true">→</span>
                          </button>
                        ))}
                      </div>
                    )}
                    {expandedStory.href ? (
                      <a
                        className="primary-button"
                        href={expandedStory.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Читать основную историю <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="primary-button"
                        onClick={() => openPart(expandedStory.readTarget)}
                      >
                        Читать историю <span aria-hidden="true">→</span>
                      </button>
                    )}
                  </div>
                </article>
              )}
            </section>
            </>
          )}

        </section>

        <section className="feature-panel scroll-reveal">
          <div className="feature-copy">
            <p className="eyebrow">Авторский цикл</p>
            <h2>Истории по Охотницам</h2>
            <p>Всем привет! Меня зовут Юджин Ю. Я поэт и автор песен.</p>
            <p>
              Скорее всего, вы знаете меня по YouTube. А если ещё нет — добро пожаловать на мой канал:{' '}
              <a href="https://youtube.com/@yujin.lyrics?si=q4-bl9in9TtFjE96&utm_source=chatgpt.com" target="_blank" rel="noreferrer">
                YouTube — Юджин Ю.
              </a>
            </p>
            <p>
              Здесь я собрал все истории по фандому «Охотниц», которые написал за время работы над песнями в 2025–2026 годах.
            </p>
            <p>
              Я разделил их на <strong>основную сюжетную линию</strong> и <strong>филлеры</strong> — отдельные истории, которые не влияют напрямую на основной сюжет.
            </p>
            <p>
              Здесь вы найдёте то, на чём основаны многие песни, которые вы уже слышали или ещё услышите на моём канале.
            </p>
          </div>
          <div className="quote-box support-card">
            <div className="support-copy">
              <p className="eyebrow">Поддержать автора</p>
              <p>
                Если вам захочется поддержать моё творчество, это можно сделать на Boosty. Поддержка помогает мне продолжать работу над историями и музыкой, а также вместе собирать средства на новые песни по «Охотницам» и другим проектам.
              </p>
            </div>
            <figure className="support-qr-frame">
              <span className="support-qr-corner support-qr-corner-top" aria-hidden="true" />
              <img
                className="support-qr"
                src={publicAsset('boosty-qr.png')}
                alt="QR-код для поддержки творчества на Boosty"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <a href="https://boosty.to/eugeneuvarov" target="_blank" rel="noreferrer">
                  Поддержать на Boosty
                </a>
              </figcaption>
              <span className="support-qr-corner support-qr-corner-bottom" aria-hidden="true" />
            </figure>
          </div>
        </section>

      </main>
    </div>
  )
}
