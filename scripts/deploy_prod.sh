
#!/usr/bin/env bash
# Example deployment helper - replace with your cloud provider CLI
echo "Packaging app..."
tar -czf kechita-deploy-$(date +%F).tgz .
echo "Done - upload to your artifact store and trigger deployment."
