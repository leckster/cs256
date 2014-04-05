var MUSCLE_GROUPS = [
	{
		name: "Back",
		exercises: [
		{
			name: "Wide Grip Pull Down"
		},
		{
			name: "Seated Row Machine"
		},
		{
			name: "One Arm Dumbell Rows"
		},
		{
			name: "Bent Over Rows"
		},
		{
			name: "One Arm Barbell Rows"
		},
		{
			name: "Pull Ups"
		},
		{
			name: "Two Arm Barbell Rows"
		}
		]
	},
	{
		name: "Hips",
		exercises: [
		{
			name: "Seated Hip Abductors"
		},
		{
			name: "Seated Hip Aductors"
		},
		{
			name: "Standing Hip Aductors"
		},
		{
			name: "Standing Hip Abductors"
		}
		]
	},
	{
		name: "Biceps",
		exercises: [
		{
			name: "Dumbell Hammer Curls"
		},
		{
			name: "Preacher Curls"
		},
		{
			name: "Striaght Bar Curls"
		},
		{
			name: "Dumbell Curls"
		},
		{
			name: "Preacher Curl Machine"
		},
		{
			name: "One Arm Pulley Curls"
		},
		{
			name: "Two Arm Pulley Curls"
		},
		{
			name: "Chin Ups"
		},
		{
			name: "Concentration Curls"
		}
		]
	},
	{
		name: "Triceps",
		exercises: [
		{
			name: "Two Hand Overhead Extenstion"
		},
		{
			name: "One Hand Overhead Extentsion"
		},
		{
			name: "Dumbell Kickbacks"
		},
		{
			name: "One Arm Pushdown"
		},
		{
			name: "Two Arm Pushdown"
		},
		{
			name: "Dips"
		},
		{
			name: "Dip Machine"
		},
		{
			name: "Tricep Machine"
		},
		{
			name: "Skull Crushers"
		}
		]
	},
	{
		name: "Core",
		exercises: [
		{
			name: "Ab Bridges"
		},
		{
			name: "Back Hyperextensions"
		},
		{
			name: "Side Hyperextensions"
		},
		{
			name: "Toe To Bar"
		},
		{
			name: "Leg Raises"
		},
		{
			name: "6 Inch Leg Lifts"
		},
		{
			name: "Crunches"
		},
		{
			name: "Sit Ups"
		}
		]
	},
	{
		name: "Quadriceps",
		exercises: [
		{
			name: "Squats"
		},
		{
			name: "Deadlifts"
		},
		{
			name: "Lunges"
		},
		{
			name: "Smth Machine"
		},
		{
			name: "Wall Sits"
		},
		{
			name: "One Legged Leg Extension"
		},
		
		{
			name: "wo Legged Leg Extension"
		}
		]
	},
	{
		name: "Hamstrings",
		exercises: [
		{
			name: "One Legged Lying Hamstring Curl"
		},
		{
			name: "Two Legged Lying Hamstring Curl"
		},
		{
			name: "One Legged Sitting Hamstring Curl"
		},
		{
			name: "Two Legged Sitting Hamstring Curl"
		},
		{
			name: "Straight Leg Dead Lifts"
		},
		{
			name: "Donkey Kicks on Hip Machine"
		}
		]
	},
	{
		name: "Calf Raises",
		exercises: [
		{
			name: "One Leg Standing Calf Raise"
		},
		{
			name: "Two Leg Standing Calf Raises"
		},
		{
			name: "Calf Raises on Leg Press Machine"
		},
		{
			name: "Seated Calf Raise"
		},
		{
			name: "One Legged Calf Raise Machine"
		},
		{
			name: "Two Legged Calf Raise Machine"
		}
		]
	},
	{
		name: "Chest",
		exercises: [
		{
			name: "Dumbell Chest Press"
		},
		{
			name: "Dumbell Incline Press"
		},
		{
			name: "Dumbell Decline Press"
		},
		{
			name: "Barbell Chest Press"
		},
		{
			name: "Barbell Incline Press"
		},
		{
			name: "Barbell Decline Press"
		},
		{
			name: "Dumbell Flies"
		},
		{
			name: "Dumbell Incline Flies"
		},
		{
			name: "Dumbell Decline Flies"
		},
		{
			name: "Fly Machine"
		},
		{
			name: "Chest Press Machine"
		},
		{
			name: "Push ups"
		},
		{
			name: "Cable Flies"
		}
		]
	},
	{
		name: "Shoulders",
		exercises: [
		{
			name: "Dumbell Side Raises"
		},
		{
			name: "Dumbell Front Raises"
		},
		{
			name: "Dumbell Shoulder Press"
		},
		{
			name: "Plate Front Raises"
		},
		{
			name: "Shrugs"
		},
		{
			name: "Seated Barbell Shoulder Press"
		},
		{
			name: "Standing Barbell Shoulder Press"
		},
		{
			name: "Arnold Press"
		},
		{
			name: "Handstand Pushups"
		},
		{
			name: "Military Press Machine"
		}
		]
	}
];

var test_workouts = [
	{
		name: "Workout 1",
		description: "first test workout in the system. Use this to test the profile page.",
		planOnly: false,
		exercises: [
			{
				mg_index: 4,
				e_index: 3,
				sets: [
					{
						weight: 80,
						rep:12,
						status: "Too Easy"
					},
					{
						weight: 90,
						rep:10,
						status: "Just Right"
					},
					{
						weight: 90,
						rep:8,
						status: "Just Right"
					},
				]
			},
			{
				mg_index: 1,
				e_index: 1,
				sets: [
					{
						weight: 40,
						rep:15,
						status: "Too Hard"
					},
					{
						weight: 30,
						rep:10,
						status: "Too Easy"
					},
					{
						weight: 35,
						rep:10,
						status: "Just Right"
					},
				]
			}
		]
	},
	{
		name: "Workout 2",
		description: "second test workout in the system. Use this to test the profile page.",
		planOnly: false,
		exercises: [
			{
				mg_index: 4,
				e_index: 3,
				sets: [
					{
						weight: 80,
						rep:12,
						status: "Too Easy"
					},
					{
						weight: 90,
						rep:10,
						status: "Just Right"
					},
					{
						weight: 90,
						rep:8,
						status: "Just Right"
					},
				]
			},
			{
				mg_index: 1,
				e_index: 1,
				sets: [
					{
						weight: 40,
						rep:15,
						status: "Too Hard"
					},
					{
						weight: 30,
						rep:10,
						status: "Too Easy"
					},
					{
						weight: 35,
						rep:10,
						status: "Just Right"
					},
				]
			}
		]
	},
	{
		name: "Workout 3",
		description: "Third test workout in the system. This should not show up in the profile page because it is only a plan.",
		planOnly: true,
		exercises: [
			{
				mg_index: 4,
				e_index: 3,
				sets: [
					{
						weight: 80,
						rep:12,
						status: ""
					},
					{
						weight: 90,
						rep:10,
						status: ""
					},
					{
						weight: 90,
						rep:8,
						status: ""
					},
				]
			},
			{
				mg_index: 1,
				e_index: 1,
				sets: [
					{
						weight: 40,
						rep:15,
						status: ""
					},
					{
						weight: 30,
						rep:10,
						status: ""
					},
					{
						weight: 35,
						rep:10,
						status: ""
					},
				]
			}
		]
	}
];

var current_workout = {
	name: "New Workout",
	description: "",
	planOnly: false,
	exercises: []
};

var current_exercise = {};

var current_exercise_index = 0;

var isAddingSet = false;

var workouts = [];

window.onload = init;

function init()
{
	//ajax for main.html
	$("#content").load("main.html");
}



//
// MAIN FUNCTIONS
//

function main_start_workout() {
	
	var m = new Date();
	var dateString =
	m.getUTCFullYear() +"/"+
	("0" + (m.getUTCMonth()+1)).slice(-2) +"/"+
	("0" + m.getUTCDate()).slice(-2) + " " +
	("0" + m.getUTCHours()).slice(-2) + ":" +
	("0" + m.getUTCMinutes()).slice(-2);

	current_workout.date = dateString;
	$("#content").load("log.html");
	$("#title").html("<div class='title-top'>Date: " + current_workout.date + "</div>"
		+"<div class='title-bottom'>" + current_workout.name + "<span class='planning-mode'><input type='checkbox'> Planning Mode</span></div>" );
}

function main_load_workout() {

}

function main_view_profile() {

}

function main_logout() {

}


//
// LOG WORKOUT
//

function log_add_exercise() {
	console.log("add exercises");
	$("#popover").html(getMuscleGroupsHTML());
	$("#popover").removeClass("hidden");
	$("#content").addClass("hidden");

}

function selectMuscleGroup(mg_index) {
	current_exercise.mg_index = mg_index;

	$("#popover").html(getExercisesHTML(mg_index));
}

function selectExercise(e_index) {
	current_exercise_index = current_workout.exercises.length;

	current_exercise.e_index = e_index;
	current_exercise.sets = [];
	current_workout.exercises.push(current_exercise);
	current_exercise = {};

	$("#popover").addClass("hidden");
	$("#content").removeClass("hidden");

	render_exercises();
	add_set_for_exercise(current_workout.exercises.length - 1);

	//TODO: show the first set selector with reps and sets.
}

function render_exercises() {
	var html = '';
	for( var i = 0; i < current_workout.exercises.length; i++) {
		var exercise = current_workout.exercises[i];
		html += '<div id="exercise_' + i + '" class="exercise-main">'
			+'<div class="arrow collapsed" onclick="toggle_exercise(' + i + ')"></div>'
			+'<div class="exercise-name">' + MUSCLE_GROUPS[exercise.mg_index].exercises[exercise.e_index].name + '</div>'
			+'<div class="remove">X</div>'
		+'</div>';
	}
	$("#content").html(html);
}

function render_sets(index) {
	var html = '';
	for( var i = 0; i < current_workout.exercises[index].sets.length; i++) {
		var set = current_workout.exercises[index].sets[i];
		html += '<div class="exercise-set">'
			+ '<div class="set-number">Set ' + (i+1) +'</div>'
			+ '<div class="log-section">'
				+ '<div class="mini-title">Reps:</div>'
				+ '<div class="reps">' + set.reps + '</div>'
			+ '</div>'
			+ '<div class="log-section">'
				+ '<div class="mini-title">Weight:</div>'
				+ '<div class="weight">' + set.weight + '</div>'
			+ '</div>'
			+ '<div class="log-section">'
				+ '<div class="status">' + set.status + '</div>'
			+ '</div>'
			+ '<div class="remove">X</div>			'
		+ '</div>';
	};
	return html;
}

function toggle_exercise(index) {
	$(".logging-area").remove();

	var arrow = $("#exercise_"+index).find(".arrow");

	if(arrow.hasClass("expanded")) {
		$("#exercise_"+index).removeClass("exercise-main-current").addClass("exercise-main");
		arrow.removeClass("expanded").addClass("collapsed");
	} else {
		current_exercise_index = index;
		$(".exercise-main-current").addClass("exercise-main").removeClass("exercise-main-current");
		$(".arrow").removeClass("expanded").addClass("collapsed");

		$("#exercise_"+index).addClass("exercise-main-current");
		arrow.removeClass("collapsed").addClass("expanded");

		$("#exercise_"+index).after("<div class='logging-area'></div>");
		$(".logging-area").html('<div class="exercise-set-wrapper clearfix">'
			+'</div><div id="add-new-set-container">'
				+'<div class="btn btn-lg btn-danger new-set-btn" onclick="add_set_for_exercise(' + current_exercise_index + ')">New Set</div>'
			+'</div>');
		$(".exercise-set-wrapper").html(render_sets(index));
	}

	if(isAddingSet) {
		isAddingSet = false;
		$("#content").append('<div id="add-exercise" onclick="log_add_exercise()">Add Exercise...	</div>');
	}

}

function add_set_for_exercise(index) {
	isAddingSet = true;

	$(".logging-area").remove();
	$("#add-exercise").remove();

	$("#exercise_"+index).removeClass("exercise-main").addClass("exercise-main-current").find("div.arrow").removeClass("collapsed").addClass("expanded");
	$("#exercise_"+index).after("<div class='logging-area'></div>");
	$(".logging-area").load("divs/logging_area", null, function(){
		var html = render_sets(index);
		html += '<div class="exercise-set">'
			+ '<div class="set-number">Set ' + (current_workout.exercises[index].sets.length+1) +'</div>'
			+ '<div class="log-section">'
				+ '<div class="mini-title">Reps:</div>'
				+ '<div class="reps">____</div>'
			+ '</div>'
			+ '<div class="log-section">'
				+ '<div class="mini-title">Weight:</div>'
				+ '<div class="weight">____</div>'
			+ '</div>'
			+ '<div class="remove">X</div>			'
		+ '</div>';
		$(".exercise-set-wrapper").html(html);
	});

}

function add_set(status) {
	isAddingSet = false;

	var new_set = {};
	new_set.reps = 10;//get reps from selector !!!!JARED!!!!
	new_set.weight = 80;//get weight from selector !!!!JARED!!!!
	new_set.status = status;

	current_workout.exercises[current_exercise_index].sets.push(new_set);

	$(".logging-area").html('<div class="exercise-set-wrapper clearfix">'
		+'</div><div id="add-new-set-container">'
			+'<div class="btn btn-lg btn-danger new-set-btn" onclick="add_set_for_exercise(' + current_exercise_index + ')">New Set</div>'
		+'</div>');
	$("#content").append('<div id="add-exercise" onclick="log_add_exercise()">Add Exercise...	</div>');
	$(".exercise-set-wrapper").html(render_sets(current_exercise_index));
}

function getMuscleGroupsHTML() {
	var html = "";
	for( var i = 0; i < MUSCLE_GROUPS.length; i++){
		var muscle_group = MUSCLE_GROUPS[i];
		html += '<div class="muscle-group" onclick="selectMuscleGroup(' + i + ')">'
			+'<div class="muscle-group-name">' + muscle_group.name + '</div>'
			+'<img class="nav-arrow-right" src="img/nav-arrow.png">'
		+'</div>';
	}
	return html;
}

function getExercisesHTML(mg_index) {
	var html = "";
	for( var i = 0; i < MUSCLE_GROUPS[mg_index].exercises.length; i++){
		var exercise = MUSCLE_GROUPS[mg_index].exercises[i];
		html += '<div class="exercise" onclick="selectExercise(' + i + ')">'
			+'<img class="video-link" src="img/video-link.png">'
			+'<div class="exercise-name">' + exercise.name + '</div>'
			+'<img class="nav-arrow-right" src="img/nav-arrow.png">'
		+'</div>';
	}
	return html;
}

//
// PLAN WOKROUT
//

