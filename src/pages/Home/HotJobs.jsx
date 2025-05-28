import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({ jobsPromise }) => {
    const jobs = use(jobsPromise);
    return (
        <div className='container mx-auto my-10'>
            <h2 className='text-4xl text-center'>Hot Jobs of the Day</h2>
            <div className='mt-10 grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;