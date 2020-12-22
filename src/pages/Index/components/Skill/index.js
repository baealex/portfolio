import React from 'react';
import chartXkcd from 'chart.xkcd';
import { Line/*, Bar, Pie, XY*/ } from "chart.xkcd-react"

function Skill() {
    return (
        <section>
            <div className="container">
                <div className="col-lg-9 mx-auto pt-10" data-aos="flip-left">
                    <h1 className="text-center font-bemin">Skill.</h1>
                    <Line
                        config={{
                            title: 'An indicator of interest and ability in programming languages.',
                            data: {
                                labels: ['default', 'C++', 'Python', 'JavaScript', 'Rust'],
                                datasets: [{
                                    label: 'ability',
                                    data: [0, 3, 7, 5, 2],
                                }, {
                                    label: 'interest',
                                    data: [10, 7, 10, 7, 8],
                                }],
                            },
                            options: {
                                yTickCount: 5,
                                legendPosition: chartXkcd.config.positionType.upRight
                            },
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Skill;