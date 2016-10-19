var request = require('superagent');
var config = require('../superagent-mock-config.js');
var logger = function(log)  {
  console.log('superagent call', log);
};
var superagentMock = require('superagent-mock')(request, config, logger);

export function handleLogin(userName, password) {
  
  return (dispatch) => {
    
    dispatch({
      type: 'LOGIN_REQUEST',
      payload: true
    })

    setTimeout(() => {
      request
      .post('/login.json')
      .send({ login: {userName: userName, password: password} })
      .end( (err, res) => {
        if (res[0]['Auth'] == 'Logged') {
          dispatch({
            type: 'LOGIN_SUCCES',
            payload: true
          })
      } else {
          dispatch({
            type: 'LOGIN_FAIL',
            payload: false
          })
        }
      }); 
    },2000)
  }
}  










//     dispatch({
//       type: 'GET_PHOTOS_REQUEST',
//       payload: year
//     })

//     setTimeout(() => {
//       dispatch({
//         type: 'GET_PHOTOS_SUCCESS',
//         payload: [1,2,3,4,5]
//       })
//     }, 1000)
//   }
// }