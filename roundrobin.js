function roundRobin(processes, quantum) {
    let queue = processes.map((p) => ({ ...p, remainingTime: p.burstTime }));
    let currentTime = 0;
    let totalWaitingTime = 0;
    let totalTurnaroundTime = 0;

    console.log("Process\tBurst Time\tWaiting Time\tTurnaround Time");
    while (queue.length > 0) {
        let process = queue.shift();
        let timeSpent = Math.min(process.remainingTime, quantum);
        currentTime += timeSpent;
        process.remainingTime -= timeSpent;

        if (process.remainingTime > 0) {
            queue.push(process);
        } else {
            let turnaroundTime = currentTime;
            let waitingTime = turnaroundTime - process.burstTime;

            totalWaitingTime += waitingTime;
            totalTurnaroundTime += turnaroundTime;

            console.log(
                `P${process.id}\t${process.burstTime}\t\t${waitingTime}\t\t${turnaroundTime}`
            );
        }
    }

    console.log(`\nAverage Waiting Time: ${(totalWaitingTime / processes.length).toFixed(2)}`);
    console.log(`Average Turnaround Time: ${(totalTurnaroundTime / processes.length).toFixed(2)}`);
}

// Example processes (id and burstTime)
const processesRR = [
    { id: 1, burstTime: 5 },
    { id: 2, burstTime: 3 },
    { id: 3, burstTime: 8 },
    { id: 4, burstTime: 6 }
];

roundRobin(processesRR, 4);
