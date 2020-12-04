import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { goToFeedPage, goToLoginPage } from '../routes/coordinator'

const useUnprotectedPage = () => {
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if(token){
      goToFeedPage(history)
    }
  }, [history])
}

export default useUnprotectedPage