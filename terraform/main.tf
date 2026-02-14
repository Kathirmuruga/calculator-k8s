terraform {
  required_providers {
    null = {
      source = "hashicorp/null"
      version = "~> 3.0"
    }
  }
}

resource "null_resource" "setup" {

  provisioner "local-exec" {
    command = "echo Infrastructure Ready"
  }
}

