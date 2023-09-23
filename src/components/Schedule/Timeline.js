import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import CelebrationRoundedIcon from "@mui/icons-material/CelebrationRounded";
import ComputerIcon from "@mui/icons-material/Computer";
import MicIcon from '@mui/icons-material/Mic';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import PhonelinkOffIcon from '@mui/icons-material/PhonelinkOff';
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
					9:00 AM
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineConnector sx={{ bgcolor: "primary.main" }} />
					<TimelineDot color="secondary">
						<CelebrationRoundedIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
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
					9:15 AM
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
					<TimelineDot color="primary">
						<VolumeUpRoundedIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: "primary.main" }} />
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
					9:45 AM
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineConnector sx={{ bgcolor: "primary.main" }} />
					<TimelineDot color="secondary">
						<MicIcon />
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
						Performance
					</Typography>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineOppositeContent
					sx={{ m: "auto 0" }}
					variant="body2"
					color="white"
				>
					10:00 AM
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
					<TimelineDot color="primary">
						<ComputerIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: "primary.main" }} />
				</TimelineSeparator>
				<TimelineContent sx={{ py: "40px", px: 2 }}>
					<Typography
						variant="h6"
						component="span"
						color={"white"}
						style={{ fontWeight: 700 }}
					>
						Hackathon Starts
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
					Throughout the event
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineConnector sx={{ bgcolor: "primary.main" }} />
					<TimelineDot color="secondary">
						<VideogameAssetIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
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
						Games
					</Typography>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineOppositeContent
					sx={{ m: "auto 0" }}
					variant="body2"
					color="white"
				>
					4:00 PM (Day 2)
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
					<TimelineDot color="primary">
						<PhonelinkOffIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: "primary.main" }} />
				</TimelineSeparator>
				<TimelineContent sx={{ py: "40px", px: 2 }}>
					<Typography
						variant="h6"
						component="span"
						color={"white"}
						style={{ fontWeight: 700 }}
					>
						Hackathon Ends
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
					4:30 PM
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineConnector sx={{ bgcolor: "primary.main" }} />
					<TimelineDot color="secondary">
						<CelebrationRoundedIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
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
