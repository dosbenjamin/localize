const { VERCEL_GIT_COMMIT_REF } = process.env
const branchesToBuild = ['main', 'dev']

console.log(`VERCEL_GIT_COMMIT_REF: ${VERCEL_GIT_COMMIT_REF}`)

if (VERCEL_GIT_COMMIT_REF && branchesToBuild.includes(VERCEL_GIT_COMMIT_REF)) {
  // Proceed with the build
  console.log('✅ - Build can proceed')
  process.exit(1)
} else {
  // Don't build
  console.log('🛑 - Build cancelled')
  process.exit(1)
}
