import axios from 'axios';

export default async function User(req, res) {
    try {
        const config = {
            headers: {
                Authorization: "token"
            }  
        };
        
        let { data: ReposLoiren } = await axios.get('https://api.github.com/users/feignwiki/repos');
        
        res.send([...ReposLoiren])
    } catch(err) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
};
