function Skeleton({classValue}){

    return (
        <>
            <div className={`block bg-gray-200 relative bg-gray-200 overflow-hidden ${classValue}`}>
                  <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"></div>
            </div>
        </>
    )
}

export default Skeleton;