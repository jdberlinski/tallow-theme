const vscode = require('vscode');

const OVERRIDE = {
  textMateRules: [
    {
      scope: ['comment', 'string.quoted.docstring.multi'],
      settings: { fontStyle: '' }
    }
  ]
};

function applySettings() {
  const italicComments = vscode.workspace.getConfiguration('tallow').get('italicComments', true);
  const editorCfg = vscode.workspace.getConfiguration('editor');
  const customizations = Object.assign({}, editorCfg.get('tokenColorCustomizations'));

  if (italicComments) {
    delete customizations['[Tallow Dark]'];
    delete customizations['[Tallow Light]'];
  } else {
    customizations['[Tallow Dark]'] = OVERRIDE;
    customizations['[Tallow Light]'] = OVERRIDE;
  }

  editorCfg.update('tokenColorCustomizations', customizations, vscode.ConfigurationTarget.Global);
}

function activate(context) {
  applySettings();
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(e => {
      if (e.affectsConfiguration('tallow.italicComments')) applySettings();
    })
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
