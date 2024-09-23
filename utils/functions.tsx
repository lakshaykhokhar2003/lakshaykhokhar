import {formFieldsProps} from "./types";
import {AnimationClip} from "three";

export const renderInput = (field: formFieldsProps, register: any, errors:  any) => {
    switch (field.type) {
        case 'textarea':
            return (<label className="space-y-3">
                <span className="field-label">{field.name}</span>
                <textarea
                    {...register(field.register)}
                    rows={5}
                    className={`field-input ${errors[field.register] && 'border-red-500'}`}
                    placeholder={field.placeholder}
                />
            </label>)
        default:
            return (<label className="space-y-3">
                    <span className="field-label">{field.name}</span>
                    <input
                        type={field.type}
                        {...register(field.register)}
                        className={`field-input ${errors[field.register] && 'border-red-500'}`}
                        placeholder={field.placeholder}
                    />
                </label>
            )
    }
}

export const renameTracks = (animation: AnimationClip) => {
    animation.tracks.forEach((track) => {
        track.name = track.name.replace('mixamorig', '');
    });
};
