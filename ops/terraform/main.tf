terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  required_version = ">= 1.5"
}

provider "aws" {
  region = var.region
}

resource "aws_vpc" "kechita" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "kechita_subnet" {
  vpc_id            = aws_vpc.kechita.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "${var.region}a"
}

resource "aws_db_instance" "postgres" {
  allocated_storage    = 20
  engine               = "postgres"
  instance_class       = "db.t3.micro"
  name                 = "kechita"
  username             = var.db_user
  password             = var.db_pass
  skip_final_snapshot  = true
  publicly_accessible  = true
}

resource "aws_elasticache_cluster" "redis" {
  cluster_id           = "kechita-redis"
  engine               = "redis"
  node_type            = "cache.t3.micro"
  num_cache_nodes      = 1
}

resource "aws_s3_bucket" "backups" {
  bucket = "kechita-backups-${var.region}"
}
