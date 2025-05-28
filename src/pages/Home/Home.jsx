import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
    const jobsPromise = fetch('http://localhost:3000/jobs')
        .then(response => response.json())
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<span className="loading loading-spinner text-primary  loading-xl"></span>}>
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;