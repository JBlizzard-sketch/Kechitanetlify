# AWS Autoscaling Example (ASG + Target Tracking)
resource "aws_autoscaling_group" "web_asg" {
  name = "kechita-web-asg"
  launch_configuration = aws_launch_configuration.web_lc.id
  desired_capacity = 2
  min_size = 1
  max_size = 6
  tag { key = "Name"; value = "kechita-web"; propagate_at_launch = true }
}

# Configure target tracking policy on CPU or custom CloudWatch metric (request rate)
