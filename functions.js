module.exports = {
  ant: function(s) {
    return /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|com)|discordapp\.com\/invite)\/.+[a-z]/g.test(
      s
    );
  }
};
