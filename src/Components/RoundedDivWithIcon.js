export function RoundedDivWithIcon(props) {
    return (
        <div class="rounded-full h-12 w-12 flex bg-gray-100 m-2">
            <div className='flex  justify-center items-center ml-4 text-blue-500'>{props.icon}
            </div>
        </div>
    );
}
