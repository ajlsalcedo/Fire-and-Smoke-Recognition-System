# Model export

Export instructions depend on the chosen inference path.

- **Browser-side inference:** convert the trained model to a compatible TensorFlow.js format and place the generated files under `website/model/` only when intentionally preparing a release.
- **Server-side inference:** document the server API and export format in this folder instead.

Do not create `model.json`, model weights, or other exported artifacts manually. Generate them using the supported exporter/converter for the trained model.
