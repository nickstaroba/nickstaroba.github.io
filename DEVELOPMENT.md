# Development Guide

## Dependencies

```shell script
pnpm install
```

## Publish

1. Commit all changes.

2. Bump the version number and create a tag and a changelog:

   ```shell script
   npm run release
   ```

3. Push all changes.

### Cross-Platform Issues

To support husky and git hooks, Git must be included in environment PATH variables.

On MacOS, this isn't usually an issue.

On Windows using Git Bash, check for Git in PATH variables:

```shell script
echo $PATH
```

Add Git to Git Bash PATH variables in `~/.bashrc`:

```shell script
echo 'export PATH=$PATH:"/c/Program Files/Git"' >> ~/.bashrc
```

WebStorm's built-in support for NPM scripts uses Node directly so Git must be added to the Windows PATH variables as well.

On Windows using `cmd`, check for Git in Windows (cmd) PATH variables:

```shell script
echo %PATH%
```

Run `cmd` as admin (Run > Type `cmd` > Press Ctrl + Shift + Enter) and add Git to Windows PATH variables:

```shell script
setx /m PATH "%PATH%;C:\Program Files\Git\bin"
```
