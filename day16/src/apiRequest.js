const apiRequest = async (url = "", optionObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionObj);
    if (!response.ok) throw Error("Please reload the app");
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};

export default apiRequest;

/*
//Pattern
const apiRequest = async (url = "", optionObj = null, errMsg = null) => {
  try {
    //function code goes here
  } catch (err){
    //if error, code goes here
  } finally {
    //clean up, code goes here
  }
};

export default apiRequest;

//piRequest('http://localhost:3000/getItems', 'Delete', 'jfdhjskhgkhjshg')
*/
