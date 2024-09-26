import {useState} from 'react';
import {Projects} from "../../utils/types.ts";

const ImageToolTip = ({item}: { item: Projects['tags'] }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="flex items-center gap-3 mt-2 max-sm:flex-wrap">
            {item.map((tag) => (
                <div
                    key={tag.id}
                    className="relative"
                    onMouseEnter={() => setHoveredIndex(tag.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <img src={tag.path} alt={tag.name} className="tech-logo"/>
                    {hoveredIndex === tag.id && (
                        <span
                            className="absolute left-1/2 bottom-full mb-2 w-max -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-xs text-white transition-opacity"
                        >
                            {tag.name}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ImageToolTip;
