const test_en_dur = {
  id_test: 1,
  test_level: "débutant",
  questions: [
    {
      id_question: 1,
      type: 'libre',
      time: 15000,
      question: 'quelle est la 1ere lettre de l\'alphabet?',
      possibilite: {
        id_possibilite: 1,
        possibilite: 'a',
      }
    }, {
      id_question: 2,
      type: 'simple',
      question: '1+1=',
      time: 60000,
      possibilite: [{
        id_possibilite: 2,
        possibilite: 3,
      }, {
        id_possibilite: 3,
        possibilite: 2,
      }, {
        id_possibilite: 4,
        possibilite: 8,
      }
      ]
    }, {
      id_question: 3,
      type: 'simple',
      time: 90000,
      question: '1+1+1=',
      possibilite: [{
        id_possibilite: 2,
        possibilite: 3,
      }, {
        id_possibilite: 3,
        possibilite: 2,
      }, {
        id_possibilite: 4,
        possibilite: 8,
      }
      ]
    }, {
      id_question: 4,
      type: 'simple',
      question: '1+1111=',
      time: 45000,
      possibilite: [{
        id_possibilite: 2,
        possibilite: 3,
      }, {
        id_possibilite: 3,
        possibilite: 2,
      }, {
        id_possibilite: 4,
        possibilite: 8,
      }
      ]
    }, {
      id_question: 5,
      type: 'libre',
      time: 5000,
      question: 'quelle est la derniere lettre de l\'alphabet?',
      possibilite: {
        id_possibilite: 1,
        possibilite: 'a',
      }
    }
  ]
}
export const infos_test = {
  id: 1,
  nom: 'Cailllaud',
  prenom: 'Tom',
  langage: 'React',
  niveau: 'débutant',
  duree: 3000000
}


export default test_en_dur