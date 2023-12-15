const test = (relative = false) => {
  let vault_path = "";

  if (relative) {
    return this.config.target_file.path.replace('.md', '');
  } else {
    return `${vault_path}/${this.config.target_file.path}.replace('.md','');`;
  }
}


module.exports = test