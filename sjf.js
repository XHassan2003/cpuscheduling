function sjf(processes) {
    // Sort processes by their burst time
    processes.sort((a, b) => a.burstTime - b.burstTime);

    let currentTime = 0;
    let totalWaitingTime = 0;
    let totalTurnaroundTime = 0;

    console.log("Process\tBurst Time\tWaiting Time\tTurnaround Time");

    processes.forEach((process) => {
        let waitingTime = currentTime; // Waiting time is the current time
        let turnaroundTime = waitingTime + process.burstTime;

        totalWaitingTime += waitingTime;
        totalTurnaroundTime += turnaroundTime;

        console.log(
            `P${process.id}\t${process.burstTime}\t\t${waitingTime}\t\t${turnaroundTime}`
        );

        currentTime += process.burstTime; // Update the current time
    });

    console.log(`\nAverage Waiting Time: ${(totalWaitingTime / processes.length).toFixed(2)}`);
    console.log(`Average Turnaround Time: ${(totalTurnaroundTime / processes.length).toFixed(2)}`);
}

// Example input: Array of processes with id and burstTime
const processes = [
    { id: 1, burstTime: 6 },
    { id: 2, burstTime: 8 },
    { id: 3, burstTime: 7 },
    { id: 4, burstTime: 3 }
];

sjf(processes);
