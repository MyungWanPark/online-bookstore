type Props = {
    rate: number;
};

export default function StarRating({ rate }: Props) {
    return (
        <div>
            {Array.from({ length: 5 }, (_, i) => {
                console.log("i = ", i);
                return (
                    <span
                        key={i}
                        className={
                            (i + 1) * 2 <= rate
                                ? "text-yellow-500"
                                : "text-gray-300"
                        }
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
}
