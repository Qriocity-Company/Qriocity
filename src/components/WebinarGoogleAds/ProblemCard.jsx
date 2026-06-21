const ProblemCard = ({ content, boldContent, pos }) => {
    return (
      <div className="md:min-w-[447px] min-w-[320px] flex flex-col md:items-start items-center md:text-start text-center bg-black p-8 rounded-3xl border border-white">
        <div className="bg-[#26CFD3] p-1 rounded-full w-fit px-4 flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
          >
            <path
              d="M5.05296 10.0463L8.83328 13.1966L13.8737 6.89607M9.46333 18.8671C8.30497 18.8671 7.15796 18.6389 6.08778 18.1957C5.01759 17.7524 4.0452 17.1026 3.22612 16.2836C2.40703 15.4645 1.7573 14.4921 1.31402 13.4219C0.870734 12.3517 0.642578 11.2047 0.642578 10.0463C0.642578 8.88798 0.870734 7.74097 1.31402 6.67078C1.7573 5.6006 2.40703 4.62821 3.22612 3.80912C4.0452 2.99004 5.01759 2.34031 6.08778 1.89703C7.15796 1.45374 8.30497 1.22559 9.46333 1.22559C11.8027 1.22559 14.0463 2.15491 15.7005 3.80913C17.3548 5.46334 18.2841 7.70693 18.2841 10.0463C18.2841 12.3857 17.3548 14.6293 15.7005 16.2836C14.0463 17.9378 11.8027 18.8671 9.46333 18.8671Z"
              stroke="black"
              strokeWidth="1.26011"
            />
          </svg>
          Solved
        </div>
  
        <div className="text-white mt-3">
          {content}
          <br />
          <span className="font-bold">{boldContent}</span>
        </div>
      </div>
    );
  };
export default ProblemCard  