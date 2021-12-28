import { Quiz, QuizQuestion } from '../../types';

const KarelQuiz: Quiz[] = [
  {
    description: 'Opakujte v angličtině',
    name: 'Karel IV',
    questions: [
      {
        answer: ['Charles IV', 'Charles the Fourth'],
        question:
          'Turista, který je v Praze, často slyší: Karlův most, Karlova univerzita, Karlštejn... Ale kdo ten Karel byl? V angličtině, kdo Karel 4.?'
      },
      {
        answer: ['Czech king', 'king'],
        question: `
          Karel 4. byl český král. Narodil se v roce 1316 a umřel v roce 1378.
          Jeho otec byl y Lucemburska a jeho matka byla Češka.
          Karel studoval ve Francii a do Prahy přišel v roce 1333.
          V angličtině, co Karel 4.?
        `
      },
      {
        answer: ['1357'],
        question: `
          Karel 4. byl velmi energický a inteligentní. Byl štíhlý a vysoký - měřil 175 centimetrů.
          To bylo neobvyklé, protože lidé byli malí. Byl dobrý politik a organizátor, ale byl taky religiózní a pověrčivý.
          Když plánoval most, hledal spolu s astrology speciální čas a den. Začínal stavět most 9. 7. 1357 v 5 hodin 31 minut.
          Proč? Protože to datum dělá "most" - 1 3 5 7 9 7 5 3 1.
          Co roce Karel postavil most?
        `
      },
      {
        answer: ['yes', 'no'],
        question: `
          Karel č. měl 4 manželky.
          Poslední z nich, krásnou Elišku Pomořanskou, která byla silná jako muž, můžete vidět vidět ve filmu Noc na Karlštejně.
          Karel měl rád Prahu a hodně pro město a pro celou zemi dělal.
          Byl to dobrý král.
          Byl Karel č. dobrý král?
        `
      }
    ]
  }
];

export default KarelQuiz;
