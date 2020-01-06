import React from 'react';
import chartXkcd from 'chart.xkcd';
import { Line/*, Bar, Pie, XY*/ } from "chart.xkcd-react"

function SectionSkill() {
    return (
        <section>
            <div class="container">
                <div class="col-lg-9 mx-auto pt-10" data-aos="flip-left">
                    <h1 class="text-center font-bemin">Skill.</h1>
                    <Line
                        config={{
                            title: 'An indicator of interest and ability in programming languages.',
                            data: {
                                labels: ['C', 'Java', 'Python', 'JavaScript', 'Rust'],
                                datasets: [{
                                    label: 'ability',
                                    data: [5, 3, 7, 3, 0],
                                }, {
                                    label: 'interest',
                                    data: [7, 2, 10, 7, 8],
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

export default SectionSkill;