import axios from 'axios';
import useSWR from 'swr';

type Methods = (
    'get' |
    'post' |
    'head' |
    'put' |
    'delete' |
    'options' |
    'patch'
);

export default function SWR(url: string, method: Methods = 'get') {
    if (url == 'linkcord') url = 'https://linkcord.js.org/api/v3/user/849166079553175582';
    return useSWR(url, href => (
        axios[method](href).then(res => res.data)
    ));
};
