function fcfs(processes) {
    let currentTime = 0;
    let totalWaitingTime = 0;
    let totalTurnaroundTime = 0;

    console.log("\tBurst Time\tWaiting Time\tTurnaround Time");
    processes.forEach((process) => {
        let waitingTime = currentTime;
        let turnaroundTime = waitingTime + process.burstTime;

        totalWaitingTime += waitingTime;
        totalTurnaroundTime += turnaroundTime;

        console.log(
            `P${process.id}\t\t${process.burstTime}\t\t\t\t${waitingTime}\t\t${turnaroundTime}`
        );

        currentTime += process.burstTime; 
    });

    console.log(`\nAverage Waiting Time: ${(totalWaitingTime / processes.length).toFixed(2)}`);
    console.log(`Average Turnaround Time: ${(totalTurnaroundTime / processes.length).toFixed(2)}`);
}

const processes = [
    { id: 1, burstTime: 5 },
    { id: 2, burstTime: 3 },
    { id: 3, burstTime: 8 },
    { id: 4, burstTime: 6 }
];

fcfs(processes);
