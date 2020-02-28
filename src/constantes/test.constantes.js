const test_en_dur = {
  id_user: 1,
  nom: 'Caillaud',
  prenom: 'Tom',
  id_test: 1,
  langage: 'React',
  test_level: "débutant",
  duree: 3000000,
  isEnded: false,
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
      question: 'Qui est le meilleur jouer de babyfoot de l\'agence?',
      possibilite: [{
        id_possibilite: 2,
        possibilite: 'Ghena',
      }, {
        id_possibilite: 3,
        possibilite: 'Baudoin',
      }, {
        id_possibilite: 4,
        possibilite: 'Leo',
      }, {
        id_possibilite: 5,
        possibilite: 'Antho',
      }
      ]
    }, {
      id_question: 4,
      type: 'simple',
      question: 'Le mec qui a goûté des huîtres pour la première fois, à quel moment il s\'est dit qu\'il allait ouvrir un truc qui ressemble à un caillou puis manger la substance visqueuse à l\'intérieur ?',
      time: 45000,
      possibilite: [{
        id_possibilite: 2,
        possibilite: 'hier',
      }, {
        id_possibilite: 3,
        possibilite: 'demain',
      }, {
        id_possibilite: 4,
        possibilite: 'jamais mais cette question est vraiment naze',
      }
      ]
    }, {
      id_question: 5,
      type: 'libre',
      time: 15000,
      question: 'Vous avez une montagne d’argent aussi haute que l’Empire State Building. Pouvez-vous tout mettre dans une pièce ?',
      possibilite: {
        id_possibilite: 1,
        possibilite: 'a',
      }
    }
  ]
}


export default test_en_dur