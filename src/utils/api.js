const api = {
    url : "https://coding-challenge-api.aerolab.co/user/me",

    token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWZhMzk5OTc1NzJiODAwNmRlNzUzMTUiLCJpYXQiOjE1OTM0NTcwNDl9.A94xfvXPzaSLyGxl1NIQ7hxl3WiER2y3EDxXabxOOFg",
    
    getUrl : function(key){
        let url = "https://coding-challenge-api.aerolab.co/"
        switch (key) {
            case 'getUser' :
                return url + "user/me";
            case 'getProducts' :
                return url + 'products';
            case 'redeemProduct' :
                return url + 'redeem'
        }

    },

    getRequest : function(action, token, id = undefined){
        let request = { 
                    method: action,
                    headers: {
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    "Authorization":"Bearer " + token
                    },
                    mode: 'cors',
                    cache: 'default' }
        if (id) {
            request.body = {
                "productId": id
            }
            request.mode = 'no-cors'
        }
        return request
    },
    
    getUser : async function() {
        let response = await fetch(this.getUrl('getUser'),this.getRequest('GET', this.token))
        let json = await response.json()
        return json
    },

    getProducts : async function() {
        let response = await fetch(this.getUrl('getProducts'),this.getRequest('GET', this.token))
        let json = await response.json()
        return json
    },

    redeemProduct : async function(id) {
        let response = await fetch(this.getUrl('redeemProduct'),this.getRequest('POST', this.token, id))
        return response
    }

}

export default api