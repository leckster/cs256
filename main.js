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
