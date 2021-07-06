import { Text } from '../../atoms/text';
import { Project, PropjectProps } from '../project';

export interface ExperienceProps {
    company: string;
    role: string;
    startDate: string;
    endDate?: string;
    projects?: PropjectProps[];
}

export function Experience(props: ExperienceProps) {
    const {
        company,
        role,
        startDate,
        endDate = '',
        projects
    } = props;

    return (
        <div className="row">
            <div className="col-lg-3 mb-5">
                <Text fontSize="big" fontWeight={600}>
                    {company}
                </Text>
                <Text fontSize="tiny" fontWeight={400}>
                    {role}
                </Text>
                <Text fontSize="tiny" fontWeight={400}>
                    {startDate} ~ {endDate}
                </Text>
            </div>
            {projects && (
                <div className="col-lg-9">
                    {projects.map(project => (
                        <Project {...project} />
                    ))}
                </div>
            )}
        </div>
    );
}