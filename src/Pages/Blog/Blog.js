import React from 'react';
import useTitle from '../../Hook/useTitle';

const Blog = () => {
    useTitle("Blogs");
    return (
        <div className="h-[500px] flex flex-col items-center justify-center">
            <h1 className="text-5xl">Coming Soon...</h1>
        </div>
    );
};

export default Blog;