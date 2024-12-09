function priorityScheduling(processes) {
    // Sort processes by their priority (lower value = higher priority)
    processes.sort((a, b) => a.priority - b.priority);

    let currentTime = 0;
    let totalWaitingTime = 0;
    let totalTurnaroundTime = 0;

    console.log("Process\tBurst Time\tPriority\tWaiting Time\tTurnaround Time");

    processes.forEach((process) => {
        let waitingTime = currentTime; // Waiting time is the current time
        let turnaroundTime = waitingTime + process.burstTime;

        totalWaitingTime += waitingTime;
        totalTurnaroundTime += turnaroundTime;

        console.log(
            `P${process.id}\t${process.burstTime}\t\t${process.priority}\t\t${waitingTime}\t\t${turnaroundTime}`
        );

        currentTime += process.burstTime; // Update current time
    });

    console.log(`\nAverage Waiting Time: ${(totalWaitingTime / processes.length).toFixed(2)}`);
    console.log(`Average Turnaround Time: ${(totalTurnaroundTime / processes.length).toFixed(2)}`);
}

// Example input: Array of processes with id, burstTime, and priority
const processes = [
    { id: 1, burstTime: 10, priority: 3 },
    { id: 2, burstTime: 1, priority: 1 },
    { id: 3, burstTime: 2, priority: 4 },
    { id: 4, burstTime: 1, priority: 5 },
    { id: 5, burstTime: 5, priority: 2 }
];

priorityScheduling(processes);
