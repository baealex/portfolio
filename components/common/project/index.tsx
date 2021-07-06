import { Badge } from '../../atoms/badge';
import { Text } from '../../atoms/text';

export interface PropjectProps {
    title: string;
    startDate: string;
    endDate?: string;
    picture?: string;
    reference?: string;
    description?: string;
    techStack?: string[];
    doings?: string[];
}

export function Project(props: PropjectProps) {
    const {
        title,
        startDate,
        endDate = '',
        picture,
        reference,
        description,
        techStack,
        doings,
    } = props;
    return (
        <div className="mb-5">
            <div className="mb-3">
                <Text fontSize="small" fontWeight={600}>
                    {title}
                    {reference && (
                        <a href={reference} target="blank" className="vivid-purple">
                            &nbsp;#
                        </a>
                    )}
                </Text>
                <Text fontSize="tiny">{startDate} ~ {endDate}</Text>
            </div>
            {picture && (
                <img className="w-100" src={picture}/>
            )}
            <div className="mt-3">
                {description && (
                    <Text fontSize="tiny">{description}</Text>
                )}
            </div>
            {doings && (
                <ul className="mt-3">
                    {doings.map((item, idx) => (
                        <li key={idx}>
                            <Text fontSize="mini">
                                {item}
                            </Text>
                        </li>
                    ))}
                </ul>
            )}
            {techStack && (
                <div className="mt-1">
                    {techStack.map((item, idx) => (
                        <Badge key={idx}>{item}</Badge>
                    ))}
                </div>
            )}
        </div>
    );
}