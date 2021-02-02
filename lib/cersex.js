const axios = require('axios')

const cersex = () => {
    return new Promise((resolve, reject) => {
        var url = https://www.reddit.com/r/MAAU/comments/hnth4n/no_puta_del_hilo_del_town/`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ result })
             })
    })
}

module.exports = cersex
