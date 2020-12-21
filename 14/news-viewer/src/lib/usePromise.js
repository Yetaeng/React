import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
    // 대기 중/완료/실패에 대한 상태 관리
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const process = async () => {
            setLoading(true);
            try {
                const resolved = await promiseCreator();
                setResolved(resolved);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        process();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    // 파라미터로 받아온 deps 배열은 usePromise 내부에서 사용한 useEffect의 의존 배열로 설정된다.
    // 이때, ESLink 경고가 나타나는데 이를 무시하려면 특정 줄에서만 무시할 수 있도록 주석을 작성해야한다.

    return [loading, resolved, error];
}