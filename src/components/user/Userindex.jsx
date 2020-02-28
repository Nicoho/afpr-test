import React, { useState, useReducer, useEffect, } from 'react';
import { questionnaire, initialState } from '../../reducers/questionnaire.reducer'
import Questionnaire from './User-components/Questionnnaire';
import Fin from './User-components/Fin'
import Debut from './User-components/Debut';
import LogoAmiltoneSeul from '../../img/LogoASeul.png'
import './user-style.scss'
import TimeOutModal from './TimeOutModal';



const Userindex = () => {
  const [state, dispatch] = useReducer(questionnaire, initialState);
  const [page, setPage] = useState(1)
  const [isEnded, setIsEnded] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // appel API avec useParams
    dispatch({ type: 'getQuestionnaire' })
  }, [])

  useEffect(() => {
    let postItem = {
      id_user: state.id_user,
      id_tes: state.id_test,
      answers: state.answers,
      isEnded: true
    }
    if (state.isEnded) { console.log('fin', postItem) }
  }, [state.isEnded, state])

  let handlePageChange = () => {
    page === 3 ? setPage(1) : setPage(page + 1)
  }

  const navigateInTest = () => {
    if (state.indexQuestion === state.questions.length - 1) {
      endTest()
      setIsEnded(true)
    } else {
      dispatch({ type: 'setIndex' })
    }
  }

  const endTest = () => {
    dispatch({ type: 'endTest' })
  }
  const ValidateResponse = (e, answer, visible) => {
    dispatch({ type: 'getAnswer', payload: answer })
    visible ? setVisible(visible) : navigateInTest()

  }

  const TimedOutNav = () => {
    navigateInTest()
    setVisible(false)
  }


  let handleComponent = () => {
    switch (page) {
      case 1:
        return <Debut handlePageChange={handlePageChange} test={state} />;
      case 2:
        return <Questionnaire handlePageChange={handlePageChange} test={state} ValidateResponse={ValidateResponse} isEnded={isEnded} setVisible={setVisible} />;
      case 3:
        return <Fin handlePageChange={handlePageChange} />;
      default:
        return 'erreur d affichage'
    }
  }

  return (
    <>
      <div className="Userindex container-fluid">
        <div className='logoAmiltoneSeul'>
          <img src={LogoAmiltoneSeul} alt='logoAmiltoneSeul' />

        </div>
        {
          handleComponent()
        }
        <TimeOutModal visible={visible} TimedOutNav={TimedOutNav} />
      </div>
    </>
  )
}

export default Userindex;