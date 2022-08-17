import * as types from "./actiontype"


const getMenData = (payload)=(dispatch)=>{

 dispatch({ type: types.MEN_DATA_LOADING });
  axios
    .get("/mens")
    .then((r) => dispatch({ type: types.MEN_DATA_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.MEN_DATA_FAILURE}));


}
export {getMenData}