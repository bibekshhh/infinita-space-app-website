import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import CelebrationRoundedIcon from "@mui/icons-material/CelebrationRounded";
import ComputerIcon from "@mui/icons-material/Computer";
export default function CustomizedTimeline() {
	return (
		<Timeline position="alternate" >
			<TimelineItem>
				<TimelineOppositeContent
					sx={{ m: "auto 0" }}
					align="right"
					variant="body2"
					color="white"
				>
					9:00 am
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineConnector sx={{ bgcolor: "primary.main" }}/>
					<TimelineDot color="secondary">
						<CelebrationRoundedIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: "secondary.main" }}/>
				</TimelineSeparator>
				<TimelineContent
					sx={{ py: "40px", px: 2 }}
					style={{ color: "white" }}
				>
					<Typography
						variant="h6"
						component="span"
						color={"white"}
						style={{ fontWeight: 700 }}
					>
						Opening Ceremony
					</Typography>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineOppositeContent
					sx={{ m: "auto 0" }}
					variant="body2"
					color="white"
				>
					9:30 am
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineConnector sx={{ bgcolor: "secondary.main" }}/>
					<TimelineDot color="primary">
						<VolumeUpRoundedIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: "primary.main" }}/>
				</TimelineSeparator>
				<TimelineContent sx={{ py: "40px", px: 2 }}>
					<Typography
						variant="h6"
						component="span"
						color={"white"}
						style={{ fontWeight: 700 }}
					>
						Keynote Speaker
					</Typography>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineOppositeContent
					sx={{ m: "auto 0" }}
					variant="body2"
					color="white"
				>
					9:30 am
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineConnector sx={{ bgcolor: "primary.main" }}/>
					<TimelineDot color="secondary">
						<ComputerIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
				</TimelineSeparator>

				<TimelineContent sx={{ py: "40px", px: 2 }}>
					<Typography
						variant="h6"
						component="span"
						color={"white"}
						style={{ fontWeight: 700 }}
					>
						Coding
					</Typography>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineOppositeContent
					sx={{ m: "auto 0" }}
					variant="body2"
					color="white"
				>
					9:30 am
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
					<TimelineDot color="primary">
						<ComputerIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: "primary.main" }}/>
				</TimelineSeparator>
				<TimelineContent sx={{ py: "40px", px: 2 }}>
					<Typography
						variant="h6"
						component="span"
						color={"white"}
						style={{ fontWeight: 700 }}
					>
            Coding Stops
					</Typography>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineOppositeContent
					sx={{ m: "auto 0" }}
					align="right"
					variant="body2"
					color="white"
				>
					9:00 am
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineConnector sx={{ bgcolor: "primary.main" }}/>
					<TimelineDot color="secondary">
						<CelebrationRoundedIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: "secondary.main" }}/>
				</TimelineSeparator>
				<TimelineContent
					sx={{ py: "40px", px: 2 }}
					style={{ color: "white" }}
				>
					<Typography
						variant="h6"
						component="span"
						color={"white"}
						style={{ fontWeight: 700 }}
					>
						Closing Ceremony
					</Typography>
				</TimelineContent>
			</TimelineItem>

		</Timeline>
	);
}
