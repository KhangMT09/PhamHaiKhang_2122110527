
import Menu from '../pages/backend/menu';
import Post from '../pages/backend/post';
import Category from './../pages/backend/category';
import Product from './../pages/backend/Product';

const RouterAdmin = [
    {
    path: "product",
    element: <Product />,
    },
    {
    path: "category",
    element: <Category />,
    },
    {
    path: "menu",
    element: <Menu />,
    },
    {
    path: "post",
    element: <Post />,
    },
];


export default RouterAdmin
