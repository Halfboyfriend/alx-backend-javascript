const getPaymentTokenFromAPI = (success) => {
    if (success === true){
        return {data: 'Successful response from the API' }
    }
    return;
};

module.exports = getPaymentTokenFromAPI;