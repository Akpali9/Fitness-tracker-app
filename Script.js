let steps = 0;
let distance = 0;
let caloriesBurned = 0;
let workoutList = [];

document.getElementById('add-workout-btn').addEventListener('click', () => {
    document.getElementById('add-workout-form').style.display = 'block';
});

document.getElementById('save-workout-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const workoutType = document.getElementById('workout-type').value;
    const workoutDuration = parseInt(document.getElementById('workout-duration').value);
    const workout = {
        type: workoutType,
        duration: workoutDuration,
    };
    workoutList.push(workout);
    updateWorkoutList();
    calculateCaloriesBurned(workoutType, workoutDuration);
    document.getElementById('add-workout-form').style.display = 'none';
    document.getElementById('workout-form').reset();
});

function updateWorkoutList() {
    const workoutListElement = document.getElementById('workout-list');
    workoutListElement.innerHTML = '';
    workoutList.forEach((workout, index) => {
        const workoutElement = document.createElement('li');
        workoutElement.textContent = `${workout.type} - ${workout.duration} minutes`;
        workoutListElement.appendChild(workoutElement);
    });
}

function calculateCaloriesBurned(workoutType, workoutDuration) {
    let caloriesBurnedPerMinute;
    switch (workoutType) {
        case 'running':
            caloriesBurnedPerMinute = 8;
            break;
        case 'cycling':
            caloriesBurnedPerMinute = 6;
            break;
        case 'swimming':
            caloriesBurnedPerMinute = 7;
            break;
        default:
            caloriesBurnedPerMinute = 0;
    }
    caloriesBurned += caloriesBurnedPerMinute * workoutDuration;
    document.getElementById('calories-burned').textContent = caloriesBurned;
}

// Example usage: increment steps and distance
function incrementSteps() {
    steps++;
    distance += 0.00076; // assume 0.00076 km per step
    document.getElementById('steps').textContent = steps;
    document.getElementById('distance').textContent = distance.toFixed(2);
}

// Call incrementSteps function every second to simulate step tracking
// setInterval(incrementSteps, 1000);

// Add manual step tracking functionality
document.getElementById('dashboard').innerHTML += '<button id="step-btn">Step</button>';
document.getElementById('step-btn').addEventListener('click', incrementSteps);
