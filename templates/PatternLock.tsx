import { useState } from "react";
import PatternLock from "react-pattern-lock/lib/components/PatternLock"
import Input from "./Input";

const PatternLockComponent = () => {
    const [path, setPath] = useState<number[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const handleFinish = () => {
        setTimeout(() => {
            setError(true)
            setIsDisabled(true)
        }, 200)
    }

    return (
        <div className="p-5 flex justify-center rounded-xl">
            <PatternLock
                width={300}
                pointSize={15}
                size={3}

                error={error}
                disabled={isDisabled}

                path={path}
                onChange={(pattern) => {
                    setPath(pattern)
                }}
                onFinish={handleFinish}
            />
        </div>
    )
}

export default PatternLockComponent;
