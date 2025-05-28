import React from 'react';
import { motion } from "framer-motion";
import team1 from '../../assets/team1.jpg';
import team2 from '../../assets/team2.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-50 min-h-96 py-8">
            <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-8 w-full px-4">
                <div className='flex-1 flex flex-col items-center gap-4 w-full'>
                    <motion.img
                        src={team1}
                        animate={{ y: [100, 150, 100] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="w-full max-w-xs sm:max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                    />
                    <motion.img
                        src={team2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="w-full max-w-xs sm:max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                    />
                </div>
                <div className='flex-1 w-full text-center lg:text-left'>
                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 4 } }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                    >
                        Remote <motion.span
                            animate={{
                                color: ['#ff5733', '#33ff33', '#8a33ff'],
                                transition: { duration: 2, repeat: Infinity }
                            }}
                        >Jobs</motion.span> For you!
                    </motion.h1>
                    <p className="py-4 sm:py-6 text-base sm:text-lg">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary w-full sm:w-auto">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
