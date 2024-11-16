interface SwitchProps {
    isDarkMode: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Switch = ({ isDarkMode, onChange }: SwitchProps) => {
    return (
        <div className="flex items-center">
            <label className="relative inline-block w-16 h-8">
                <input
                    type="checkbox"
                    className="opacity-0 w-0 h-0"
                    checked={isDarkMode}
                    onChange={onChange}
                />
                <span className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 dark:bg-gray-800 rounded-full transition-colors duration-300"></span>
                <span className="absolute top-1 left-1 w-6 h-6 bg-white dark:bg-blue-900 rounded-full transition-transform duration-300 transform dark:translate-x-8 flex items-center justify-center">
                    <span className="text-lg text-gray-800 dark:text-white transition-all duration-300">
                        {isDarkMode ? "🌙" : "🌞"}
                    </span>
                </span>
            </label>
        </div>
    );
};

export default Switch;
